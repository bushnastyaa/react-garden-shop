import React from "react";
import HeadBlock from "../../components/UI/HeadBlock/HeadBlock";
import ProductList from "../../components/ProductList/ProductList";
import Filter from "../../components/Filter/Filter";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../../components/UI/Loader/Loader";
import ErrorBlock from "../../components/UI/ErrorBlock/ErrorBlock";

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <main className="section">
      <HeadBlock title="All products" />
      <Filter />
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Products;
