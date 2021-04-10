import { Campaign } from "../types/Campaign";
import { CampaignTypes } from "../types/CampaignTypes";

export function matchesCampaignType(campaign: Campaign, type: CampaignTypes) {
  const { createdOn } = campaign;
  const createdDate = new Date(createdOn);
  // set date to midnight to avoid hours, minutes etc while comparing
  createdDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  switch (type) {
    case CampaignTypes.LIVE:
      return createdDate.getTime() === today.getTime();
    case CampaignTypes.UPCOMING:
      return createdDate.getTime() > today.getTime();
    case CampaignTypes.PAST:
      return createdDate.getTime() < today.getTime();
  }
}

export const isXS = window.matchMedia("(max-width: 576px)").matches;
export const isSM = window.matchMedia("(max-width: 768px)").matches;
export const isMD = window.matchMedia("(max-width: 992px)").matches;
export const isLG = window.matchMedia("(min-width: 992px)").matches;
