export const Dresses = Array.from(Array(8).keys()).map((i) => ({
  name: `Dress ${i + 1}`,
  image:
    " https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg",
  price: `$${100 * (i + 1)}`
}));
