import { MENU, Menu } from "../Constant/Menu";

export const getLabelFromPathname = (pathname: string): string => {
  const matched = MENU.find((item: Menu) => {
    const parts = item.source.split("/");
    const match = parts[parts.length - 1];
    return match === pathname;
  });
  return matched?.label ? matched?.label : pathname;
};
