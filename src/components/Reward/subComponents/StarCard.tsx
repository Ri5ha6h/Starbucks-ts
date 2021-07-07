import React from 'react';

interface Props {
  image: string;
  alt: string;
}

const StarCard: React.FC<Props> = (props) => {
  return (
    <div className="flex px-4 py-4 md:w-3/6 lg:w-2/5 lg:py-0 lg:px-0">
      <img className="w-28 h-39.5" src={props.image} alt={props.alt} />
      <div className="ml-4">{props.children}</div>
    </div>
  );
};

StarCard.defaultProps = {};
export default StarCard;
