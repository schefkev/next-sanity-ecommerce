import { cookies } from 'next/headers';

export default function ItemsInCart() {
  const cart = cookies().get('cart');
  let itemInCart = [];
  if (cart) {
    itemInCart = JSON.parse(cart.value);
  }

  let totalAmountOfItemsInCart = 0;
  for (let i = 0; i < itemInCart.length; i++) {
    const item = itemInCart[i];
    if (item) {
      totalAmountOfItemsInCart += item.amount;
    }
  }

  return <span>{totalAmountOfItemsInCart}</span>;
}
