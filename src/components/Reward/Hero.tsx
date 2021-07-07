import React from 'react'
import ButtonLinks from '../subComponents/ButtonLinks';
import SimpleLinks from '../subComponents/SimpleLinks';

interface Props{
  }
const  Hero: React.FC<Props> =(props) => {
  return (
    <section className="z-0 aspect-w-3 aspect-h-4 md:aspect-h-2 md:aspect-w-5">
    <div className="pt-5 text-center bg-cover md:text-left bg-ig-hero md:bg-ig-hero-desk md:bg-primary-100 md:py-12 md:px-4 lg:py-20 xl:py-32">
      <h1 className="text-2xl font-semibold uppercase lg:text-4xl">
        Free Coffee
      </h1>
      <h1 className="text-2xl font-semibold uppercase lg:text-4xl">
        Is a tap Away
      </h1>
      <p className="mt-4 text-lg lg:text-xl">
        Join now to start earning Rewards.
      </p>
      <ButtonLinks theme="green" className="inline-block mt-5 md:hidden">
        Join in the app
      </ButtonLinks>
      <ButtonLinks theme="green" className="hidden mt-5 md:inline-block">
        Join now
      </ButtonLinks>
      <SimpleLinks className="block mt-3 lg:hidden">Join now</SimpleLinks>
      <p className="hidden mt-3 lg:block lg:text-xl">
        Or <SimpleLinks>join in the app</SimpleLinks> for the best
        experience
      </p>
    </div>
  </section>
    );
  }

 Hero.defaultProps = {
  }
 export default Hero;