import Link from "next/link";
import { ReactNode } from "react";

const BreadcrumbItem = ({
  children,
  href,
  isCurrent,
  ...props
}: {
  children: ReactNode;
  href: string;
  isCurrent: boolean;
}) => {
  return (
    <li {...props}>
      <Link
        href={href}
        passHref
        className={isCurrent ? "text-blue-500" : ""}
        aria-current={isCurrent ? "page" : "false"}
      >
        {children}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
