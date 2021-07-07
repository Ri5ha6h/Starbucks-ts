import React from 'react';
import ButtonLinks from '../subComponents/ButtonLinks';
import SimpleLinks from '../subComponents/SimpleLinks';

interface Props {}
const Codes: React.FC<Props> = (props) => {
  return (
    <section className="px-4 py-20 text-left lg:max-w-2xl lg:ml-32 xl:ml-60">
      <h2 className="text-3xl font-semibold">Star Codes</h2>
      <p className="mt-4 text-base">
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
        add Stars to your account.
      </p>
      <div className="mt-6">
        <form className="flex flex-col" action="">
          <input
            className="w-full py-3 pl-3 text-lg font-medium placeholder-black rounded-lg focus:outline-none ring-1 ring-black"
            type="text"
            placeholder="Enter your Star Code"
          />
          <ButtonLinks className="self-end mt-5 mr-1 text-lg hover:bg-gray-200">
            Submit
          </ButtonLinks>
        </form>
      </div>
      <p className="mt-5 text-sm">Have a receipt but don't have a code?</p>
      <p className="text-sm">
        Go to <SimpleLinks theme="green">starbucks-stars.com</SimpleLinks> to
        upload your receipt and collect your Stars.
      </p>
    </section>
  );
};

Codes.defaultProps = {};
export default Codes;
