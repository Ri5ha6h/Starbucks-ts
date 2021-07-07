import React from 'react';

interface Props {
  image: string;
  alt: string;
  className?: string;
}

const ExtraCard: React.FC<Props> = (props) => {
  return (
    <div className={'flex flex-1 lg:flex-col lg:px-5 ' + props.className}>
      <div className="flex items-center justify-center flex-shrink-0 cursor-pointer lg:mx-auto">
        <img className="w-28 h-28" src={props.image} alt={props.alt} />
      </div>
      <div className="max-w-full px-4">{props.children}</div>
    </div>
  );
};

ExtraCard.defaultProps = {};
export default ExtraCard;
