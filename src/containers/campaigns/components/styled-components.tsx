import styled from "styled-components";
import { Flex } from "../../../components/common";

export const ListContainer = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ListHeader = styled(Flex)`
  background-color: #f1f1f4;
  padding: 1.5rem;
  > * {
    text-transform: uppercase;
  }
`;

export const DateContainer = styled.div`
  flex: 1;
`;

export const CampaignContainer = styled.div`
  flex: 3;
`;
export const ViewContainer = styled.div`
  flex: 1;
`;
export const ActionsContainer = styled.div`
  flex: 4;

  @media (max-width: 768px) {
    flex: 1;
  }
`;
export const ListItemsContainer = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid #ececec;
  }
`;

export const SchedulerContainer = styled.div`
  background-color: var(--white);
  width: 50vw;
  min-width: 300px;
  max-width: 500px;
  padding: 1rem;
`;
