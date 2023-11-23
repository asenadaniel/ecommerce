import axios from "axios";

export const productData = async () => {
  const products = await axios.get('https://fakestoreapiserver.reactbd.com/products'
  );

  if (products.ok) {
    throw Error('Oops! Something went wrong...')
  }

  return products
}