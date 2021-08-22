import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../Redux/actions/ProductActions";
const ProductDetals = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const Detals = useSelector((state) => state.Detals);
    console.log(Detals);
    const { image, title, price, category, description } = Detals;
    const fetchDeatals = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {
        if (productId && productId !== "") {
            fetchDeatals();
        }
    }, [productId]);
    return (
        <div className="ui grid container ">
            {Object.keys(Detals).length === 0 ? (
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle row">
                            <div className="column lp">
                                <img
                                    className="ui fluid image"
                                    src={image}
                                    alt=""
                                />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label" href="#">
                                        ${price}
                                    </a>
                                </h2>
                                <h3 className="category">{category}</h3>
                                <p>{description}</p>
                                <div
                                    className="ui vertical animated button red"
                                    tabIndex="0"
                                >
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetals;
