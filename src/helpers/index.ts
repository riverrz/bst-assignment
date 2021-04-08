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

export const isXS = window.matchMedia("(max-width: 576px)").matches;
export const isSM = window.matchMedia("(max-width: 768px)").matches;
export const isMD = window.matchMedia("(max-width: 992px)").matches;
export const isLG = window.matchMedia("(min-width: 992px)").matches;
