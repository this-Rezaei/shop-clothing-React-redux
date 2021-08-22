import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../Redux/actions/ProductActions";
const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchproducts = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products`)
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchproducts();
    }, []);

    return (
        <div className="ui grid container tops">
            <ProductComponent />
        </div>
    );
};

export default ProductList;
