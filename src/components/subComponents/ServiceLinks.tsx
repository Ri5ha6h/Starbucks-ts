import React, { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  content: string;
  className?: string;
}

const ServiceLinks: React.FC<Props> = ({ content, className, ...rest }) => {
  return (
    <li className={className}>
      <a
        {...rest}
        className={'text-base font-normal text-gray-400 hover:text-black '}
      >
        {content}
      </a>
    </li>
  );
};

ServiceLinks.defaultProps = {};
export default ServiceLinks;
