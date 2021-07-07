import React, { useState } from 'react';

interface Props {
  select: number;
  favoriteNumber: string;
}

const FavoriteButton: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(props.select);
  return (
    <>
      <button
        onClick={() => setSelected(selected)}
        className="flex-1 px-2 py-4 text-center focus:outline-none"
      >
        <h3 className="">
          {props.favoriteNumber} <span className="text-xs text-gold">★</span>
        </h3>
      </button>
    </>
  );
};

FavoriteButton.defaultProps = {
  select: 0,
};
export default FavoriteButton;
