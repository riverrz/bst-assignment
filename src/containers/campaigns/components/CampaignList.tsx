import React, { useCallback, useEffect, useState } from "react";
import { Typography } from "../../../components/common";
import useAPIHook from "../../../hooks/useAPIHook";
import { Campaign } from "../../../types/Campaign";
import { CampaignTypes } from "../../../types/CampaignTypes";
import * as campaignServices from "../services/index";

interface Props {
  activeCampaignType: CampaignTypes;
}

function CampaignList(props: Props) {
  const { activeCampaignType } = props;

  const { loading, error, errorMsg, data, fetchData } = useAPIHook<Campaign>({
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
  return <div>Showing data</div>;
}

export default CampaignList;
