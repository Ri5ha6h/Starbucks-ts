import React from 'react'
import SimpleLinks from '../subComponents/SimpleLinks';

interface Props{
  }
const  Ques: React.FC<Props> =(props) => {
  return (
    <section className="px-4 py-20 text-left lg:max-w-xl lg:ml-32 xl:ml-60">
    <h2 className="text-3xl font-semibold">Questions?</h2>
    <p className="mt-4 text-base">
      We want to help in any way we can. You can ask your barista anytime or
      we’ve answered the most commonly asked questions{' '}
      <SimpleLinks theme="green">right over here</SimpleLinks>
      .
    </p>
  </section>
    );
  }

 Ques.defaultProps = {
  }
 export default Ques;