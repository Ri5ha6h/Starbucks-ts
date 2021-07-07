import React from 'react';

interface Props {
  image: string;
  alt: string;
}

const FavoriteDrinks: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-end flex-1 flex-shrink-0">
        <img
          className="content-center lg:w-96"
          src={props.image}
          alt={props.alt}
        />
      </div>
      <div className="flex-1">{props.children}</div>
    </>
  );
};

FavoriteDrinks.defaultProps = {};
export default FavoriteDrinks;
