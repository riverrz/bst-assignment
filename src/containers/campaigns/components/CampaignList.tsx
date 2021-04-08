import React, { useCallback, useEffect, useState } from "react";
import { Hidden, Typography } from "../../../components/common";
import useAPIHook from "../../../hooks/useAPIHook";
import { Campaign as CampaignType } from "../../../types/Campaign";
import { CampaignTypes } from "../../../types/CampaignTypes";
import * as campaignServices from "../services/index";
import CampaignListItem from "./CampaignListItem";
import {
  ActionsContainer,
  CampaignContainer,
  DateContainer,
  ListContainer,
  ListHeader,
  ListItemsContainer,
  ViewContainer,
} from "./styled-components";

interface Props {
  activeCampaignType: CampaignTypes;
}

function CampaignList(props: Props) {
  const { activeCampaignType } = props;

  const {
    loading,
    error,
    errorMsg,
    data,
    fetchData,
  } = useAPIHook<CampaignType>({
    getData: campaignServices.getCampaigns,
  });

  useEffect(() => {
    fetchData(activeCampaignType);
  }, [activeCampaignType, fetchData]);

  if (loading) {
    return (
      <Typography as="p" color="secondary">
        Loading...
      </Typography>
    );
  }
  if (error) {
    return (
      <Typography as="p" color="secondary">
        {errorMsg}
      </Typography>
    );
  }
  if (data.length === 0) {
    return (
      <Typography as="p" color="secondary">
        No campaigns available under this category!
      </Typography>
    );
  }
  return (
    <ListContainer>
      <Hidden smDown>
        <ListHeader>
          <DateContainer>
            <Typography as="h6" color="primary" fontSize="1.8rem">
              Date
            </Typography>
          </DateContainer>
          <CampaignContainer>
            <Typography as="h6" color="primary" fontSize="1.8rem">
              Campaign
            </Typography>
          </CampaignContainer>
          <ViewContainer>
            <Typography as="h6" color="primary" fontSize="1.8rem">
              View
            </Typography>
          </ViewContainer>
          <ActionsContainer>
            <Typography as="h6" color="primary" fontSize="1.8rem">
              Actions
            </Typography>
          </ActionsContainer>
        </ListHeader>
      </Hidden>
      <ListItemsContainer>
        {data.map((campaign) => {
          return <CampaignListItem key={campaign.id} data={campaign} />;
        })}
      </ListItemsContainer>
    </ListContainer>
  );
}

export default CampaignList;
