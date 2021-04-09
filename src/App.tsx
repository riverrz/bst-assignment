import React, { useMemo } from "react";
import AppModals from "./components/common/AppModals";
import Campaigns from "./containers/campaigns";
import WithModals, { ModalContext, ModalFunctions } from "./hoc/WithModals";
import Navbar from "./layout/Navbar";

interface Props extends ModalFunctions {}

function App(props: Props) {
  const { modals, addModal, closeModal } = props;
  const contextValue = useMemo(() => {
    return { addModal, closeModal };
  }, [addModal, closeModal]);
  return (
    <>
      <AppModals modals={modals} />
      <ModalContext.Provider value={contextValue}>
        <Navbar />
        <Campaigns />
      </ModalContext.Provider>
    </>
  );
}

export default WithModals(App);
