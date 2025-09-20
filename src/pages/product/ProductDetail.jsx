import { useParams } from "react-router-dom"
import { products } from "./products";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    return (
        <div>
            <h1>Product ID:{id}</h1>
            <h1>Product ID:{product.name}</h1>
        </div>
    )
}