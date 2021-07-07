import React, { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: 'black' | 'green';
}
const SimpleLinks: React.FC<Props> = ({
  theme,
  className,
  children,
  ...rest
}) => {
  let themeClass = '';

  if (theme === 'black') {
    themeClass = 'underline hover:no-underline ';
  } else if (theme === 'green') {
    themeClass = 'underline hover:no-underline text-primary-200 ';
  }

  return (
    <a {...rest} className={'cursor-pointer ' + themeClass + className}>
      {children}
    </a>
  );
};

SimpleLinks.defaultProps = {
  theme: 'black',
};
export default SimpleLinks;
