import styled from "styled-components";
import { Modal } from "../../hoc/WithModals";
import { Overlay } from "./Overlay";

interface Props {
  modals: Modal[];
}

function AppModals(props: Props) {
  return (
    <>
      {props.modals.map(({ content, id }, i) => {
        return (
          <Overlay key={id}>
            <ModalContainer zIndex={i + 101}>{content}</ModalContainer>
          </Overlay>
        );
      })}
    </>
  );
}

const ModalContainer = styled.div<{ zIndex: number }>`
  padding: 1rem;
  z-index: ${({ zIndex }) => zIndex};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default AppModals;
