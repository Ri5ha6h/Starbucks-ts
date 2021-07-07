import React from 'react';
import SimpleLinks from '../subComponents/SimpleLinks';
import fun from '../../images/1-fun-freebies.webp';
import order from '../../images/2-order-and-pay-ahead.webp';
import faster from '../../images/3-get-to-free-faster.webp';
import ExtraCard from './subComponents/ExtraCard';

interface Props {}
const Extras: React.FC<Props> = (props) => {
  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-xl font-medium lg:text-3xl lg:font-semibold">
        Endless Extras
      </h2>
      <p className="max-w-xl mx-auto mt-3 text-sm font-normal lg:text-base">
        Joining Starbucks® Rewards means unlocking access to exclusive benefits.
        Say hello to easy ordering, tasty Rewards and—yes, free coffee.
      </p>
      <div className="flex flex-col mt-10 text-left lg:flex-row lg:text-center lg:justify-around">
        <ExtraCard image={fun} alt="fun freebies" className="mt-4">
          <h4 className="text-xl font-medium lg:mt-5">Fun freebies</h4>
          <p className="mt-4">
            Not only can you earn free coffee, look forward to a birthday treat
            plus coffee and tea refills.
          </p>
          <SimpleLinks className="block mt-4 text-primary-200">
            Learn more
          </SimpleLinks>
        </ExtraCard>
        <ExtraCard image={order} alt="order and pay" className="mt-4">
          <h4 className="text-xl font-medium lg:mt-5">Order & pay ahead</h4>
          <p className="mt-4">
            Enjoy the convenience of in-store, curbside or drive-thru pickup at
            select stores.
          </p>
          <SimpleLinks className="block mt-4 text-primary-200">
            Learn more
          </SimpleLinks>
        </ExtraCard>
        <ExtraCard image={faster} alt="get to free faster" className="mt-4">
          <h4 className="text-xl font-medium lg:mt-5">Get to free faster</h4>
          <p className="mt-4">
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
          </p>
          <SimpleLinks className="block mt-4 text-primary-200">
            Learn more
          </SimpleLinks>
        </ExtraCard>
      </div>
    </section>
  );
};

Extras.defaultProps = {};
export default Extras;
