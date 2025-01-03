import React from "react";
import HeadBlock from "../../components/UI/HeadBlock/HeadBlock";
import ProductList from "../../components/ProductList/ProductList";
import { useProductsSale } from "../../hooks/useProductsSale";
import Loader from "../../components/UI/Loader/Loader";
import Filter from "../../components/Filter/Filter";
import ErrorBlock from "../../components/UI/ErrorBlock/ErrorBlock";

const Sales: React.FC = () => {
  const { productsSale, loading, error } = useProductsSale();

  return (
    <main className="section">
      <HeadBlock title="Discounted items" />
      <Filter showDiscountCheckbox={false} />
      {loading ? (
        <Loader />
      ) : productsSale.length > 0 ? (
        <ProductList products={productsSale} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Sales;
