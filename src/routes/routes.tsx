
import { Navigate, RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Categories from '../pages/Categories/Categories';
import Category from '../pages/Category/Category';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import Sales from '../pages/Sales/Sales';
import Page404 from '../pages/Page404/Page404';
import Cart from '../pages/Cart/Cart';


export const routes: RouteObject[] = [
  { path: "/", element: <Home/> },
  { path: '/categories', element: <Categories /> },
  { path: '/category/:id', element: <Category /> },
  { path: '/products', element: <Products /> },
  { path: '/product/:id', element: <Product /> },
  { path: '/sales', element: <Sales /> },
  { path: '/cart', element: <Cart /> },
  { path: '/404', element: <Page404 /> },
  { path: "*", element: <Navigate replace to="/404" /> },
];