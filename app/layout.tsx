"use client";

import "@/app/Styles/globals.scss";
import { Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "./Components/Common/BreadCrumb/Breadcrumb";
import BreadcrumbItem from "./Components/Common/BreadCrumb/BreadcrumbItem";
import { getLabelFromPathname } from "./Utils/Common";
import Providers from "./Provider";
import ThemeSwitcher from "./Components/Common/ThemeSwitcher";

const openSan = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    {
      href: string;
      label: string;
      isCurrent: boolean;
    }[]
  >();

  useEffect(() => {
    let pathArray = pathname.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = `/${pathArray.slice(0, index + 1).join("/")}`;

      return {
        href,
        label: getLabelFromPathname(path),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [pathname]);

  return (
    <html lang='en'>
      <body className={openSan.className}>
        <Providers>
          <ThemeSwitcher />
          <div className='h-screen'>
            <div>
              <Breadcrumb>
                <BreadcrumbItem isCurrent={pathname === "/"} href='/'>
                  Truyện
                </BreadcrumbItem>
                {breadcrumbs &&
                  breadcrumbs.map((breadcrumb) => (
                    <BreadcrumbItem
                      key={breadcrumb.href}
                      href={breadcrumb.href}
                      isCurrent={breadcrumb.isCurrent}
                    >
                      {breadcrumb.label}
                    </BreadcrumbItem>
                  ))}
              </Breadcrumb>
            </div>
            <div className='container'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
