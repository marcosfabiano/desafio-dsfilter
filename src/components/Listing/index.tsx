import "./styles.css";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function Listing({ product }: Props) {
  return (

      <div className="dsf-listing-card">
        <p>{product.name}</p>
        <h3>R$ {product.price.toFixed(2)}</h3>

    </div>
  );
}
