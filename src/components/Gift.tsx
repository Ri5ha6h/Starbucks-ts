import React from 'react'

interface Props{
  }
const  Gift: React.FC<Props> =(props) => {
  return (
      <>
        <div>
            this is gift page
        </div>
      </>
    );
  }

 Gift.defaultProps = {
  }
 export default React.memo(Gift);