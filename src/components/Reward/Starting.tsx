import React from 'react';
import SimpleLinks from '../subComponents/SimpleLinks';
import Step from './subComponents/Step';

interface Props {}
const Starting: React.FC<Props> = (props) => {
  return (
    <section className="px-4 py-20 text-center">
      <h2 className="text-xl font-medium md:text-3xl md:font-semibold">
        Getting started is easy
      </h2>
      <p className="mt-3 text-lg font-normal lg:text-xl">
        Earn Stars and get rewarded in a few easy steps.
      </p>
      <div className="flex flex-col flex-1 mt-10 text-left lg:flex-row lg:text-center lg:justify-around md:px-24">
        <Step stepNumber={1} className="mt-4">
          <h4 className="text-xl font-medium lg:hidden">
            Download the Starbucks App
          </h4>
          <h4 className="hidden mt-5 text-xl font-medium lg:block">
            Create an account
          </h4>
          <p className="mt-4 lg:hidden">
            <SimpleLinks theme="green">Join in the app</SimpleLinks> to get
            access to the full range of Starbucks® Rewards benefits. You can
            also <SimpleLinks theme="green">join online</SimpleLinks>.
          </p>
          <p className="hidden mt-4 lg:block">
            To get started, <SimpleLinks theme="green">join now</SimpleLinks>.
            You can also{' '}
            <SimpleLinks theme="green">join in the app</SimpleLinks> to get
            access to the full range of Starbucks® Rewards benefits.
          </p>
        </Step>
        <Step stepNumber={2} className="mt-4">
          <h4 className="text-xl font-medium lg:mt-5">
            Order and pay how you’d like
          </h4>
          <p className="mt-4">
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways.{' '}
            <SimpleLinks theme="green">Learn how</SimpleLinks>
          </p>
        </Step>
        <Step stepNumber={3} className="mt-4">
          <h4 className="text-xl font-medium lg:mt-5">
            Earn Stars, get Rewards
          </h4>
          <p className="mt-4">
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </Step>
      </div>
    </section>
  );
};

Starting.defaultProps = {};
export default Starting;
