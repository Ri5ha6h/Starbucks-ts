import React from 'react'
import ButtonLinks from '../subComponents/ButtonLinks';

interface Props{
  }
const  Header: React.FC<Props> =(props) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-2 py-2 md:top-24 bg-primary-300 md:px-20 md:py-4 lg:px-24 xl:px-32">
    <h2 className="font-bold tracking-widest text-white uppercase">
      Starbucks® Rewards
    </h2>

    <ButtonLinks theme="white" className="md:hidden">
      Join in the app
    </ButtonLinks>
  </header>
    );
  }

 Header.defaultProps = {
  }
 export default Header;