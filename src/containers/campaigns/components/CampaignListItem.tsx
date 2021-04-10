import React from "react";
import { Flex, Hidden, Typography, Image } from "../../../components/common";
import { Button } from "../../../components/common/Button";
import CollapsibleCTAs from "../../../components/common/CollapsibleCTAs";
import { getDayDiff } from "../../../helpers";
import { Campaign } from "../../../types/Campaign";
import {
  ActionsContainer,
  CampaignContainer,
  DateContainer,
  ViewContainer,
} from "./styled-components";

interface Props {
  data: Campaign;
  openScheduleModal: (data: Campaign) => void;
  openViewCampaignDescription: (data: Campaign) => void;
}

function CampaignListItem(props: Props) {
  const { data, openScheduleModal, openViewCampaignDescription } = props;

  const { name, region } = data;
  const createdOn = new Date(data.createdOn);
  const today = new Date();
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
          {getDayDiff(createdOn, today)}
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
        <Flex alignItems="center">
          <div>
            <Image src="/assets/svg/campaign-1.svg" alt={name} spaceRight />
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
        <Button
          className="grow"
          onClick={() => openViewCampaignDescription(data)}
        >
          <Flex alignItems="center">
            <Image src="/assets/svg/dollar.svg" alt="CSV" spaceRight />
            View
          </Flex>
        </Button>
      </ViewContainer>
      <ActionsContainer>
        <Flex justifyContent="flex-start" alignItems="center">
          <CollapsibleCTAs>
            <Button className="grow">
              <Flex alignItems="center">
                <Image src="/assets/svg/csv-cta.svg" alt="CSV" spaceRight />
                CSV
              </Flex>
            </Button>
            <Button className="grow">
              <Flex alignItems="center">
                <Image
                  src="/assets/svg/report-cta.svg"
                  alt="Report"
                  spaceRight
                />
                Report
              </Flex>
            </Button>
            <Button onClick={() => openScheduleModal(data)} className="grow">
              <Flex alignItems="center">
                <Image
                  src="/assets/svg/calendar.svg"
                  alt="Schedule again"
                  spaceRight
                />
                Schedule again
              </Flex>
            </Button>
          </CollapsibleCTAs>
        </Flex>
      </ActionsContainer>
    </Flex>
  );
}

export default React.memo(CampaignListItem);
