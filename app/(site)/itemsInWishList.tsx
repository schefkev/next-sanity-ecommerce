import { cookies } from 'next/headers';

interface ProductCookie {
  id: number;
  amount: number;
}

export default function ItemsInWishList() {
  const wishlist = cookies().get('wishlist');
  let itemInWishlist: ProductCookie[] = [];
  if (wishlist) {
    itemInWishlist = JSON.parse(wishlist.value);
  }

  let totalAmountOfItemsInCart = 0;
  for (let i = 0; i < itemInWishlist.length; i++) {
    const item = itemInWishlist[i];
    if (item) {
      totalAmountOfItemsInCart += item.amount;
    }
  }

  return <span>{totalAmountOfItemsInCart}</span>;
}
