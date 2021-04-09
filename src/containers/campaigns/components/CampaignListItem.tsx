import React from "react";
import { Flex, Hidden, Typography } from "../../../components/common";
import { Button } from "../../../components/common/Button";
import CollapsibleCTAs from "../../../components/common/CollapsibleCTAs";
import { Campaign } from "../../../types/Campaign";
import {
  ActionsContainer,
  CampaignContainer,
  DateContainer,
  ViewContainer,
} from "./styled-components";

interface Props {
  data: Campaign;
}

function CampaignListItem(props: Props) {
  const { data } = props;
  const { name, region } = data;
  const createdOn = new Date(data.createdOn);

  function renderDate() {
    return (
      <>
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
      </>
    );
  }

  return (
    <Flex padding="1.5rem">
      <Hidden smDown>
        <DateContainer>{renderDate()}</DateContainer>
      </Hidden>
      <CampaignContainer>
        <Flex>
          <div>
            <img src="/assets/svg/campaign-1.svg" alt={name} />
          </div>
          <div>
            <Typography as="div" fontSize="1.6rem">
              {name}
            </Typography>
            <Typography as="div" fontStyle="italic" transform="uppercase">
              {region}
            </Typography>
            <Hidden smUp>
              <div>{renderDate()}</div>
            </Hidden>
          </div>
        </Flex>
      </CampaignContainer>
      <ViewContainer>
        <Flex justifyContent="center" alignItems="center">
          <Typography as="div" color="primary" fontSize="1.8rem">
            <img src="/assets/svg/dollar.svg" alt="CSV" />
            View
          </Typography>
        </Flex>
      </ViewContainer>
      <ActionsContainer>
        <Flex justifyContent="space-evenly" alignItems="center">
          <CollapsibleCTAs>
            <Button>
              <img src="/assets/svg/csv-cta.svg" alt="CSV" />
              CSV
            </Button>
            <Button>
              <img src="/assets/svg/report-cta.svg" alt="Report" />
              Report
            </Button>
            <Button onClick={() => console.log("Scheduling again")}>
              <img src="/assets/svg/calendar.svg" alt="Schedule again" />
              Schedule again
            </Button>
          </CollapsibleCTAs>
        </Flex>
      </ActionsContainer>
    </Flex>
  );
}

export default React.memo(CampaignListItem);
