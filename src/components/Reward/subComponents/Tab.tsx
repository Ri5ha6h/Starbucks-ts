import React from 'react'

interface Props{
    title: number;
    children: React.ReactNode;
  }
const  Tab: React.FC<Props> =({children}) => {
  return (
      <>
        {children}
      </>
    );
  }

 Tab.defaultProps = {
  }
 export default React.memo(Tab);