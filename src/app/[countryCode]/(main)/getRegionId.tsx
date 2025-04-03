import Cookies from 'js-cookie';
import { CookieKeys } from 'middleware';

export const getRegionId = () => {
  return Cookies.get(CookieKeys.MedusaRegionId);
};
