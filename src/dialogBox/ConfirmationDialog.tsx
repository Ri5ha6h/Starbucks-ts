import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { ExclamationIcon, XIcon } from '@heroicons/react/outline';

interface Props {
  open?: boolean;
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  onClose: (open: false) => void;
}

const ConfirmationDialog: React.FC<Props> = ({
  open,
  title,
  description,
  okText,
  cancelText,
  onClose: setOpen,
}) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 bg-gray-700"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all duration-500 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition-all duration-200 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="fixed z-20 h-auto mx-auto bg-white rounded-md inset-x-52 w-96 inset-y-40">
              <div className="flex justify-end p-3">
                <button onClick={() => setOpen(false)}>
                  <XIcon className="w-4 h-4 " />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ExclamationIcon className="w-20 h-20 text-primary-300" />

                <h1 className="mt-4 text-2xl">{title}</h1>
                {description && <p>{description}</p>}
                <div className="mt-7">
                  <button onClick={() => setOpen(false)} className="px-6 py-2 bg-gray-400 rounded-md">
                    {cancelText}
                  </button>
                  <button onClick={() => setOpen(false)} className="px-6 py-2 ml-3 rounded-md bg-primary-200">
                    {okText}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

ConfirmationDialog.defaultProps = {
  open: false,
  title: 'Are you Sure?',
  okText: 'Delete',
  cancelText: 'Cancel',
};
export default ConfirmationDialog;
