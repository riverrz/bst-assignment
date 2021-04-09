import React, { useState, useCallback } from "react";
import uniqid from "uniqid";

export interface ModalProps {
  content: JSX.Element;
}

export interface Modal extends ModalProps {
  id: string;
}

interface ContextValues {
  addModal: (data: ModalProps) => void;
  closeModal: (modalId: string) => void;
}

export interface ModalFunctions extends ContextValues {
  modals: Modal[];
}

export const ModalContext = React.createContext<ContextValues>({
  addModal: () => {},
  closeModal: () => {},
});

function WithModals(WrappedComponent: any) {
  return function Inner(props: any) {
    const [modals, setModals] = useState<Modal[]>([]);
    const closeModal = useCallback((modalId: string) => {
      setModals((prevModals) => prevModals.filter(({ id }) => id !== modalId));
    }, []);

    const addModal = useCallback(
      (props: ModalProps) => {
        const { content } = props;
        const id = uniqid();
        setModals((prevModals) =>
          prevModals.concat({
            id,
            content: React.cloneElement(content, {
              closeModal: () => closeModal(id),
            }),
          })
        );
        return id;
      },
      [closeModal]
    );

    return (
      <WrappedComponent
        {...props}
        addModal={addModal}
        closeModal={closeModal}
        modals={modals}
      />
    );
  };
}

export default WithModals;
