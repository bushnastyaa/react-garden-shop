import React from "react";
import HeadBlock from "../../components/UI/HeadBlock/HeadBlock";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useCategories } from "../../hooks/useCategories";
import Loader from "../../components/UI/Loader/Loader";
import ErrorBlock from "../../components/UI/ErrorBlock/ErrorBlock";

const Categories: React.FC = () => {
  const { categories, loading, error } = useCategories();

  return (
    <main className="section">
      <HeadBlock title="Categories" />
      {loading ? (
        <Loader />
      ) : categories.length > 0 ? (
        <CategoryList categoryList={categories} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Categories;
