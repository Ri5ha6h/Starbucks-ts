import React from 'react';
import payA from '../../images/1A.png';
import payB from '../../images/1B.png';
import payC from '../../images/2A.png';
import payD from '../../images/2B.png';
import payE from '../../images/3A.png';
import StarCard from './subComponents/StarCard';
import StarDollar from './subComponents/StarDollar';

interface Props {}
const Pay: React.FC<Props> = (props) => {
  return (
    <section className="w-full py-16 text-center bg-secondary-200">
      <h2 className="px-4 text-xl font-medium lg:text-3xl lg:font-semibold">
        Cash or card, you earn Stars
      </h2>
      <p className="max-w-xl px-4 mx-auto mt-3 text-sm font-normal lg:text-base">
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </p>
      <div className="p-4 text-left divide-y-2 divide-gray-300 mt-14">
        <div className="flex flex-col lg:py-8 md:w-full md:flex-row md:justify-start md:px-4">
          <StarDollar starNumber={1}>
            <p>Pay as you go</p>
          </StarDollar>
          <StarCard image={payA} alt="scan and pay">
            <h3 className="text-base font-medium md:text-xl">
              Scan and pay separately
            </h3>
            <p className="mt-4">
              Use cash or credit/debit card at the register.
            </p>
          </StarCard>
          <StarCard image={payB} alt="save payment">
            <h3 className="text-base font-medium md:text-xl">
              Save payment in the app
            </h3>
            <p className="mt-4">
              Check-out faster by saving a credit/debit card or PayPal to your
              account. You’ll be able to order ahead or scan and pay at the
              register in one step.
            </p>
          </StarCard>
        </div>
        <div className="flex flex-col lg:py-8 md:w-full md:flex-row md:justify-start md:px-4">
          <StarDollar starNumber={2}>
            <p>Add funds in the app</p>
          </StarDollar>
          <StarCard image={payC} alt="preload">
            <h3 className="text-base font-medium md:text-xl">Preload</h3>
            <p className="mt-4">
              To save time and earn Stars twice as fast, add money to your
              digital Starbucks Card using any payment option. Scan and pay in
              one step or order ahead in the app.
            </p>
          </StarCard>
          <StarCard image={payD} alt="gift card">
            <h3 className="text-base font-medium md:text-xl">
              Register your gift card
            </h3>
            <p className="mt-4">
              Then use it to pay through the app. You can even consolidate
              balances from multiple cards in one place.
            </p>
          </StarCard>
        </div>
        <div className="flex flex-col lg:py-8 md:w-full md:flex-row md:justify-start md:px-4">
          <StarDollar starNumber={3}>
            <p>With Starbucks® Rewards Visa® Card</p>
          </StarDollar>
          <StarCard image={payE} alt="earn stars">
            <h3 className="text-base font-medium md:text-xl">
              Earn Stars even faster
            </h3>
            <p className="mt-4">
              Earn Stars on all purchases you make with our credit card in and
              outside of Starbucks. Earn 1 Star per $1 when you digitally
              preload your Starbucks Card with your Starbucks® Rewards Visa®
              Card, and earn 2 Stars per $1 when you pay with that preloaded
              Starbucks Card.
            </p>
          </StarCard>
        </div>
      </div>
    </section>
  );
};

Pay.defaultProps = {};
export default Pay;
