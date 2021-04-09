import React, { useState } from "react";
import { Typography, Button } from "../../../components/common";
import { SchedulerContainer } from "./styled-components";

interface Props {
  closeModal?: () => void;
  onDone: (date: Date) => void;
}

function Scheduler(props: Props) {
  const [date, setDate] = useState<Date>(new Date());

  const { closeModal, onDone } = props;
  return (
    <SchedulerContainer>
      <Typography as="h5" textAlign="center">
        Choose new date
      </Typography>
      <div>
        <Button onClick={closeModal}>Close</Button>
        <Button
          onClick={() => {
            onDone(date);
            closeModal && closeModal();
          }}
        >
          Done
        </Button>
      </div>
    </SchedulerContainer>
  );
}

export default Scheduler;
