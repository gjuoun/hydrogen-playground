import {
  // The `useShopQuery` hook makes server-only GraphQL queries to the Storefront API.
  useShopQuery,
  // The `flattenConnection` utility takes Shopify storefront relay data
  // and transforms it into a flat array of objects.
  flattenConnection,
} from '@shopify/hydrogen';
// The `ProductProviderFragment` queries for all the product data you need for a component.
import {ProductProviderFragment} from '@shopify/hydrogen/fragments';
// Import the `Layout` component that defines the structure of the page.
import Layout from '../components/Layout.server';
// Import the `ProductList` component that defines the products to display.
// Import `gql` to parse GraphQL queries.
import gql from 'graphql-tag';
import {HomeView} from '../views/home/Home.client';
// Fetch product data from your storefront by passing in a GraphQL query to the
// `useShopQuery` server component.
export default function Index({first = 3}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numProductMetafields: 0,
      includeReferenceMetafieldDetails: false,
      numProductVariants: 250,
      numProductMedia: 10,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
      numProductSellingPlanGroups: 10,
      numProductSellingPlans: 10,
      first,
    },
  });

  // Transform Shopify storefront relay data into
  // a flat array of objects.
  const products = flattenConnection(data.products);
  // Return a list of products.
  return (
    <Layout>
      <HomeView first={first} products={products} />
    </Layout>
  );
}
// Define the GraphQL query.
const QUERY = gql`
  query HomeQuery(
    $numProductMetafields: Int!
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
    $first: Int!
  ) {
    products(first: $first) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }
  ${ProductProviderFragment}
`;
