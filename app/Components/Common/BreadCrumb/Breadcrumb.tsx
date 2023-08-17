import { Children, ReactNode } from "react";
import { Fragment } from "react";

const Breadcrumb = ({ children }: { children: ReactNode }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className='container mt-8' aria-label='breadcrumb'>
      <ol className='flex items-center space-x-2'>{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;
