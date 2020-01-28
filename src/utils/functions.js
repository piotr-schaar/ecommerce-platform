import uuid from 'uuid';

export const createShopItem = (name, price, imgSrc) => {
  return {
    id: uuid(),
    name,
    price,
    image: imgSrc,
  };
};
