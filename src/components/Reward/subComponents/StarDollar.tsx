import React from 'react'

interface Props{
    starNumber: number;
    content?: string;
  }

const  StarDollar: React.FC<Props> =(props) => {
  return (
      <div className="py-4 md:w-1/6 lg:w-1/5 lg:py-0">
        <h3 className="text-2xl font-semibold">
          {props.content}{props.starNumber}  <span className="text-lg">★</span> per dollar
        </h3>
        {props.children}
      </div>
    );
  }

 StarDollar.defaultProps = {
  }
 export default StarDollar;