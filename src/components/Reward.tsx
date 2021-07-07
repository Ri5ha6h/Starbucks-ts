import React from 'react';
import Codes from './Reward/Codes';
import Extras from './Reward/Extras';
import Favorite from './Reward/Favorite';
import Header from './Reward/Header';
import Hero from './Reward/Hero';
import Pay from './Reward/Pay';
import Ques from './Reward/Ques';
import Starting from './Reward/Starting';
import Terms from './Reward/Terms';

interface Props {}
const Reward: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <Starting />
      <Favorite />
      <Extras />
      <Pay />
      <Codes />
      <Ques />
      <Terms />
    </>
  );
};

Reward.defaultProps = {};
export default React.memo(Reward);
