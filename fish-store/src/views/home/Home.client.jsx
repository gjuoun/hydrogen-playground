import LoadMore from '../../components/LoadMore.client';
import ProductList from '../../components/ProductList';
import {AppThemeProvider} from './layout/AppThemeProvider.client';

export const HomeView = ({first, products}) => {
  console.log(first);
  return (
    <AppThemeProvider>
      <LoadMore current={first}>
        <ProductList products={products} />
      </LoadMore>
    </AppThemeProvider>
  );
};
