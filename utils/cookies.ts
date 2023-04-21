import Cookies from 'js-cookie';

export type CookieValue = {
  id: number;
  amount: number;
}[];

/* GET COOKIES */
export function getParsedCookie(key: string): CookieValue | undefined {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}
/* SET COOKIES */

export function setStringifiedCookie(key: string, value: CookieValue) {
  Cookies.set(key, JSON.stringify(value), { expires: 365 });
}

/* DELETE COOKIES */

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

/* STRINGIFY COOKIES */

export function stringifyCookieValue(value: CookieValue) {
  return JSON.stringify(value);
}
