import { Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

interface Props {
  children: React.ReactElement[];
}

const TabList: React.FC<Props> = ({ children }) => {
  const [selectIndex, setSelectIndex] = useState(0);

  // const tabWidth = 100 / children.length;

  return (
    <>
      <div className="z-10 py-1 shadow-lg bg-primary-50">
        <h2 className="mt-8 text-xl font-medium text-center md:text-3xl md:font-semibold">
          Get your favorites for free
        </h2>

        <div className="relative max-w-xl mx-auto mt-5 lg:mt-10">
          <div className="flex text-xl font-bold">
            {children.map((child, index) => (
              <button
                onClick={() => setSelectIndex(index)}
                className="flex-1 px-2 py-4 text-center focus:outline-none"
              >
                <h3 className="">
                  {child.props.title}{' '}
                  <span className="text-xs text-gold">★</span>
                </h3>
              </button>
            ))}
          </div>
          <div>
            {children.map((child, index) => (
              <Transition
                show={index === selectIndex}
                as={Fragment}
                enter="transition-transform duration-300"
                enterFrom="translate-x-1/5"
                enterTo="translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-1/5"
              >
                <div className="absolute w-1/5 h-1 bg-primary-200"></div>
              </Transition>
            ))}
          </div>
        </div>
      </div>
      <div className="relative py-36 bg-primary-100">
        {children.map((child, index) => (
          <Transition
            show={index === selectIndex}
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            entered="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center max-w-full py-10 lg:flex-row">
              {child}
            </div>
          </Transition>
        ))}
      </div>
    </>
  );
};

TabList.defaultProps = {};
export default React.memo(TabList);

// style={{
//   width: tabWidth + '%',
//   left: tabWidth * selectIndex + '%',
// }}
