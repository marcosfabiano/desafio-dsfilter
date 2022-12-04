import ProductCount from "../ProductCount";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="nav-header">
        <h1>DSFilter</h1>
        <ProductCount />
      </nav>
    </header>
  );
}
