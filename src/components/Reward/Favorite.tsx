import React from 'react';
import image from '../../images/025.png';
import FavoriteButton from './subComponents/FavoriteButton';
import FavoriteDrinks from './subComponents/FavoriteDrinks';

interface Props {}

const Favorite: React.FC<Props> = () => {
  const tabTitle = ['25', '50', '150', '200', '400'];

  return (
    <section className="w-full pt-10 ">
      <div className="py-1 bg-primary-50">
        <h2 className="mt-8 text-xl font-medium text-center md:text-3xl md:font-semibold">
          Get your favorites for free
        </h2>

        <div className="relative max-w-xl mx-auto mt-5 lg:mt-10">
          <div className="flex text-xl font-bold">
            {tabTitle.map((title, index) => (
              <FavoriteButton
                select={index}
                favoriteNumber={title}
              ></FavoriteButton>
            ))}
          </div>
          <div className="absolute w-1/5 h-1 bg-primary-200"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 bg-primary-100 lg:flex-row">
        <FavoriteDrinks image={image} alt="25">
          <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
            Customize your drink
          </h4>
          <p className="py-4 text-center lg:py-5 lg:max-w-sm lg:text-left">
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </p>
        </FavoriteDrinks>
      </div>
    </section>
  );
};

Favorite.defaultProps = {};
export default React.memo(Favorite);
