import React, { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Typography, Button, Base, Flex } from "../../../components/common";
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
        <Calendar className="margin-center" onChange={onChange} value={date} />
      </Base>
      <Flex justifyContent="space-evenly">
        <Button
          onClick={closeModal}
          variant="outlined"
          color="dark"
          className="text-bold"
        >
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onDone(date);
            closeModal && closeModal();
          }}
        >
          Done
        </Button>
      </Flex>
    </SchedulerContainer>
  );
}

export default Scheduler;
