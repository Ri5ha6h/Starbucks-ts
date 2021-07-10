import React from 'react';
import image25 from '../../images/025.png';
import image50 from '../../images/050.png';
import image150 from '../../images/150.png';
import image200 from '../../images/200.png';
import image400 from '../../images/400.png';
import TabList from './subComponents/TabList';
import FavoriteDrinks from './subComponents/FavoriteDrinks';
import Tab from './subComponents/Tab';

interface Props {}

const Favorite: React.FC<Props> = () => {
  return (
    <section className="w-full pt-10 ">
      <TabList>
        <Tab title={25}>
          <FavoriteDrinks image={image25} alt="25">
            <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
              Customize your drink
            </h4>
            <p className="py-4 text-center lg:text-left">
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favorite syrup.
            </p>
          </FavoriteDrinks>
        </Tab>
        <Tab title={50}>
          <FavoriteDrinks image={image50} alt="50">
            <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
              Brewed hot coffee, bakery item or hot tea
            </h4>
            <p className="py-4 text-center lg:text-left">
              Pair coffee cake or an almond croissant with your fresh cup of hot
              brew.
            </p>
          </FavoriteDrinks>
        </Tab>
        <Tab title={150}>
          <FavoriteDrinks image={image150} alt="150">
            <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
              Handcrafted drink, hot breakfast or parfait
            </h4>
            <p className="py-4 text-center lg:text-left">
              Have a really good morning with a breakfast sandwich, oatmeal or
              your favorite drink.
            </p>
          </FavoriteDrinks>
        </Tab>
        <Tab title={200}>
          <FavoriteDrinks image={image200} alt="200">
            <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
              Salad, sandwich or protein box
            </h4>
            <p className="py-4 text-center lg:text-left">
              Nourish your day with a hearty Chipotle Chicken Wrap or Eggs &
              Cheese Protein Box.
            </p>
          </FavoriteDrinks>
        </Tab>
        <Tab title={400}>
          <FavoriteDrinks image={image400} alt="400">
            <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
              Select merchandise or at-home coffee
            </h4>
            <p className="py-4 text-center lg:text-left">
              Take home a signature cup, a bag of coffee or your choice of
              select coffee accessories.
            </p>
          </FavoriteDrinks>
        </Tab>
      </TabList>
    </section>
  );
};

Favorite.defaultProps = {};
export default React.memo(Favorite);
