import LoadMore from '../../components/LoadMore.client';
import ProductList from '../../components/ProductList';

export const HomeView = ({first, products}) => {
  console.log(first);
  return (
    <LoadMore current={first}>
      <ProductList products={products} />
    </LoadMore>
  );
};
