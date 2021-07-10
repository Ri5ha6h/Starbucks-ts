import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

interface Props {}

const Dialog: React.FC<Props> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="w-full mx-auto mt-20 text-lg underline border-none text-primary-200 active:text-primary-300"
        >
          Click to open confirm Modal
        </button>
        <ConfirmationDialog open={isDialogOpen} onClose={setIsDialogOpen} />
      </div>
    </>
  );
};

Dialog.defaultProps = {};
export default React.memo(Dialog);
