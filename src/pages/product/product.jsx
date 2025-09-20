import { Link } from "react-router-dom";
import { products } from "./products";

export default function Product() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", }} id="" className="fdf">
                {products.map((product) => (
                    <div key={product.id} style={{ background: "lightgrey", margin: '20px', borderRadius: "20px", padding: "20px", }}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </div>
                ))}
            </div>

        </>
    )
}