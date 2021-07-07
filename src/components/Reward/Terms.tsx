import React from 'react'
import SimpleLinks from '../subComponents/SimpleLinks';

interface Props{
  }
const  Terms: React.FC<Props> =(props) => {
  return (
    <section className="px-4 text-sm font-medium text-left py-14 bg-secondary-100">
    <p className="px-4">At participating stores. Restrictions apply.</p>
    <div className="flex flex-col mt-6 md:flex-row">
      <div className="flex flex-col flex-1 px-4">
        <div>
          <h4 className="text-lg font-medium tracking-wider text-black uppercase opacity-60">
            Earning Stars
          </h4>
          <p className="mt-4">
            Stars cannot be earned on purchases of alcohol, Starbucks Cards
            or Starbucks Card reloads.
          </p>
          <p className="mt-4">
            Earn 1 Star per $1 spent when you scan your member barcode in
            the app, then pay with cash, credit/debit cards or mobile
            wallets at participating stores. You can also earn 1 Star per $1
            spent when you link a payment method and pay directly through
            the app.
          </p>
          <p className="mt-4">
            Earn 2 Stars per $1 spent when you load funds and pay with your
            digital Starbucks Card in the app. You can also earn 2 Stars per
            $1 spent when you pay in-person at a participating store with
            your registered physical Starbucks Card or scan your member
            barcode in the app, and then use any physical Starbucks Card
            (regardless of whether it is registered) to complete the
            purchase.
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-medium tracking-wider text-black uppercase opacity-60">
            Benefits
          </h4>
          <p className="mt-4">
            Free refills available during same in-store visit only. To
            qualify for the Birthday Reward, you must have made at least one
            Star-earning transaction.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-4">
        <div>
          <h4 className="text-lg font-medium tracking-wider text-black uppercase opacity-60">
            Terms of Use
          </h4>
          <p className="mt-4">
            For full program details visit{' '}
           <SimpleLinks theme="green">starbucks.com/rewards/terms</SimpleLinks>
            .
          </p>
          <p className="mt-4">
            * Earn 1 Star per $1 when digitally loading your Starbucks Card
            with your Starbucks® Rewards Visa® Card: See your Card Rewards
            Program Agreement for more details.
          </p>
          <p className="mt-4">
            Starbucks® Rewards benefits are available at participating
            Starbucks stores. Not all stores have the ability to honor
            Rewards at this time. Visit the{' '}
            <SimpleLinks theme="green">Starbucks Store Locator</SimpleLinks>
            {' '}and search for locations honoring “Redeem Rewards”.
          </p>
          <p className="mt-4">
            Deposit and credit card products provided by JPMorgan Chase
            Bank, N.A. Member FDIC
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-medium tracking-wider text-black uppercase opacity-60">
            Redeeming Rewards
          </h4>
          <p className="mt-4">
            Rewards cannot be redeemed for alcoholic beverages or
            multi-serve items. Not all stores honor tiered Rewards. Select
            stores redeem 150 Stars for free food or drink items only.
          </p>
        </div>
      </div>
    </div>
  </section>
    );
  }

 Terms.defaultProps = {
  }
 export default Terms;