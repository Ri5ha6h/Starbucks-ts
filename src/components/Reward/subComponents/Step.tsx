import React from 'react';

interface Props {
  stepNumber?: number;
  // title: string,
  className?: string;
}

const Step: React.FC<Props> = (props) => {
  return (
    <div className={'flex lg:flex-col lg:px-5 ' + props.className}>
      <div className="flex items-center justify-center w-12 h-12 p-4 mx-auto text-2xl font-medium border-2 rounded-full text-primary-200 border-primary-200 ">
        {props.stepNumber}
      </div>
      <div className={'px-4'}>{props.children}</div>
    </div>
  );
};

Step.defaultProps = {};
export default Step;


