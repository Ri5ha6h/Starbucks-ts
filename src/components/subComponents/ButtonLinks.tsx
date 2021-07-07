import React, { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: 'white' | 'black' | 'green';
}

const ButtonLinks: React.FC<Props> = ({
  theme,
  className,
  children,
  ...rest
}) => {
  let themeClass = '';

  if (theme === 'white') {
    themeClass = 'text-white border-white ';
  } else if (theme === 'black') {
    themeClass = 'text-black border-black ';
  } else if (theme === 'green') {
    themeClass = 'text-white border-primary-200 bg-primary-200 ';
  }

  return (
    <a
      {...rest}
      className={
        'flex-shrink-0 border rounded-full focus:outline-none px-4 py-1.7 font-medium cursor-pointer ' +
        themeClass +
        className
      }
    >
      {children}
    </a>
  );
};

ButtonLinks.defaultProps = {
  theme: 'black',
};

export default ButtonLinks;
