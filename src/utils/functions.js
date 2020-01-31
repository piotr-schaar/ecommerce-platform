export const createShopItem = (id, name, price, imgSrc) => {
  return {
    id,
    name,
    price,
    image: imgSrc,
  };
};

export const sortArrayByType = (arr, type) => {
  switch (type) {
    case 'price':
      return [...arr].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    case 'name':
      return [...arr].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    default:
      return arr;
  }
};
