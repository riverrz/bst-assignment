import React, { useCallback, useContext, useEffect } from "react";
import { Hidden, Typography } from "../../../components/common";
import { ModalContext, ModalFunctions } from "../../../hoc/WithModals";
import useAPIHook from "../../../hooks/useAPIHook";
import { Campaign, Campaign as CampaignType } from "../../../types/Campaign";
import { CampaignTypes } from "../../../types/CampaignTypes";
import * as campaignServices from "../services/index";
import CampaignListItem from "./CampaignListItem";
import Scheduler from "./Scheduler";
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

  const { addModal } = useContext(ModalContext);

  const {
    loading,
    error,
    errorMsg,
    data,
    fetchData,
    setData,
  } = useAPIHook<CampaignType>({
    getData: campaignServices.getCampaigns,
  });

  useEffect(() => {
    fetchData(activeCampaignType);
  }, [activeCampaignType, fetchData]);

  const onScheduleDateChange = useCallback((date: Date, data: Campaign) => {
    // Get the updated date and insert the campaign appropriately
    console.log(date);
    // setData once data is updated
  }, []);

  const openScheduleModal = useCallback(
    (data: Campaign) => {
      console.log("Open schedule modal");
      addModal({
        content: (
          <Scheduler onDone={(date) => onScheduleDateChange(date, data)} />
        ),
      });
    },
    [addModal, onScheduleDateChange]
  );

  if (loading) {
    return (
      <Typography as="p" fontSize="1.6rem">
        Loading...
      </Typography>
    );
  }
  if (error) {
    return (
      <Typography as="p" fontSize="1.6rem">
        {errorMsg}
      </Typography>
    );
  }
  if (data.length === 0) {
    return (
      <Typography as="p" fontSize="1.6rem">
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
          return (
            <CampaignListItem
              key={campaign.id}
              data={campaign}
              openScheduleModal={openScheduleModal}
            />
          );
        })}
      </ListItemsContainer>
    </ListContainer>
  );
}

export default CampaignList;
