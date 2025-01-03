import React from "react";
import HeadBlock from "../../components/UI/HeadBlock/HeadBlock";
import Filter from "../../components/Filter/Filter";
import ProductList from "../../components/ProductList/ProductList";
import { useCategory } from "../../hooks/useCategory";
import Loader from "../../components/UI/Loader/Loader";
import { useNavigate } from "react-router-dom";
import ErrorBlock from "../../components/UI/ErrorBlock/ErrorBlock";

const Category: React.FC = () => {
  const { category, products, loading, error } = useCategory();
  const navigate = useNavigate();

  if (error === "Error: 404") {
    navigate('/404');
  }

  return (
    <main className="section">
      {category && <HeadBlock title={category.title} />} 
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

export default Category;
