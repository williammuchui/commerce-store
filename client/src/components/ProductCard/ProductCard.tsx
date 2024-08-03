import axios from "axios";
import { Fragment, useState } from "react";

export default function ProductCard() {
    type Product = {
        title: string;
        price: number;
        description: string;
        category: string;
        image_url: string;
    }
    const [products, setProducts] = useState<Product[]>([]);
    const [token, setToken] = useState<string>("");

    setToken(
        localStorage.get("token")
    );

    axios.get("/products", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then(
        response => setProducts(response.data)
    ).catch(err => console.log(err))

    return (
        <Fragment>
            {(!products.length) && <span>Loading Products...</span>}
            {(products.length) && 
                <ul>
                    {products.map((product: Product, i: number) => (
                        <div key={i}>
                            <img src={product.image_url} alt="product Image"/>
                            <h2>{product.title}</h2>
                            <h4>{product.price}</h4>
                            <h4>{product.category}</h4>
                            <p>{product.description}</p>
                        </div>
                    ))}
            </ul>
            }
        </Fragment>
    )
}