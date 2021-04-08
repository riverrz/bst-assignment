import React, { useState } from "react";
import { Container, Typography } from "../components/common";

interface Props {}

function Campaigns(props: Props) {
  return (
    <Container>
      <Typography fontSize="3vw" gutterBottom>
        Manage Campaigns
      </Typography>
    </Container>
  );
}

export default Campaigns;
