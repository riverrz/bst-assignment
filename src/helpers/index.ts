import { Campaign } from "../types/Campaign";
import { CampaignTypes } from "../types/CampaignTypes";

export function matchesCampaignType(campaign: Campaign, type: CampaignTypes) {
  const { createdOn } = campaign;
  const createdDate = new Date(createdOn).getTime();
  const today = new Date().getTime();
  switch (type) {
    case CampaignTypes.LIVE:
      return createdDate === today;
    case CampaignTypes.UPCOMING:
      return createdDate > today;
    case CampaignTypes.PAST:
      return createdDate < today;
  }
}
