import React, { useCallback, useContext, useEffect } from "react";
import { Hidden, Typography } from "../../../components/common";
import { ModalContext } from "../../../hoc/WithModals";
import useAPIHook from "../../../hooks/useAPIHook";
import { Campaign, Campaign as CampaignType } from "../../../types/Campaign";
import { CampaignTypes } from "../../../types/CampaignTypes";
import * as campaignServices from "../services/index";
import CampaignDescription from "./CampaignDescription";
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
    // Fetch the data based on activeCampaignType
    fetchData(activeCampaignType);
  }, [activeCampaignType, fetchData]);

  const onScheduleDateChange = useCallback(
    (date: Date, campaign: Campaign) => {
      // Get the updated date by updating the campaign's position
      const updatedData = campaignServices.updateCampaignScheduleDate(
        campaign,
        date,
        activeCampaignType
      );

      // setData once data is updated
      setData(updatedData);
    },
    [activeCampaignType, setData]
  );

  // For opening modal containing calendar for updating scheduled date
  const openScheduleModal = useCallback(
    (campaign: Campaign) => {
      addModal({
        content: (
          <Scheduler
            onDone={(date) => onScheduleDateChange(date, campaign)}
            currentDate={new Date(campaign.createdOn)}
          />
        ),
      });
    },
    [addModal, onScheduleDateChange]
  );

  const openViewCampaignDescription = useCallback(
    (campaign: Campaign) => {
      addModal({
        content: <CampaignDescription data={campaign} />,
      });
    },
    [addModal]
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
              openViewCampaignDescription={openViewCampaignDescription}
            />
          );
        })}
      </ListItemsContainer>
    </ListContainer>
  );
}

export default CampaignList;
