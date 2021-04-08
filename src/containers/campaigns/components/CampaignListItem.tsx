import React from "react";
import { Flex, Hidden, Typography } from "../../../components/common";
import { Campaign } from "../../../types/Campaign";
import { DateContainer } from "./styled-components";

interface Props {
  data: Campaign;
}

function CampaignListItem(props: Props) {
  const { data } = props;
  const createdOn = new Date(data.createdOn);

  return (
    <Flex padding="1.5rem">
      <Hidden smDown>
        <DateContainer>
          <Typography as="h6" fontSize="1.6rem" fontWeight="normal">
            {createdOn.toLocaleDateString()}
          </Typography>
          <Typography
            as="h6"
            fontSize="1.4rem"
            fontWeight="normal"
            fontStyle="italic"
          >
            5 days ago
          </Typography>
        </DateContainer>
      </Hidden>
    </Flex>
  );
}

export default React.memo(CampaignListItem);
