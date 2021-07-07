import React from 'react';

interface Props {
  title: string;
}

const Services: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-xl font-medium">{props.title}</h2>
      </div>
      <ul className="flex-col hidden mt-8 lg:flex">{props.children}</ul>
    </div>
  );
};

Services.defaultProps = {};
export default Services;
