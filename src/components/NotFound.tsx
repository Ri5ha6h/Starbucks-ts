import React from 'react';

interface Props {}
const NotFound: React.FC<Props> = (props) => {
  return (
    <>
      <div>page not found</div>
    </>
  );
};

NotFound.defaultProps = {};
export default React.memo(NotFound);
