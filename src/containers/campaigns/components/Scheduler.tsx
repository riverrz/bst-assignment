import React, { useCallback, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Typography, Button, Base } from "../../../components/common";
import { SchedulerContainer } from "./styled-components";

interface Props {
  closeModal?: () => void;
  onDone: (date: Date) => void;
  currentDate: Date;
}

function Scheduler(props: Props) {
  const { closeModal, onDone, currentDate } = props;

  const [date, setDate] = useState<Date>(currentDate || new Date());

  const onChange = useCallback((newDate: Date | Date[]) => {
    setDate(newDate as Date);
  }, []);

  return (
    <SchedulerContainer>
      <Typography as="h5" textAlign="center" fontSize="1.8rem">
        Choose new date
      </Typography>
      <Base padding="2rem">
        <Calendar onChange={onChange} value={date} />
      </Base>
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
