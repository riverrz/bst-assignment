import { matchesCampaignType } from "../../../helpers";
import { Campaign } from "../../../types/Campaign";
import { CampaignTypes } from "../../../types/CampaignTypes";
import { delay } from "../../../utils/delay";
import mockData from "./mockData.json";

// Acts like frontend cache for the data
const store: { [campaignType: string]: Campaign[] } = {};

// Get the data based on activeType from store
export const getCampaigns = async (campaignType: CampaignTypes) => {
  // If not present then fetch the data
  if (!store[campaignType]) {
    // artifical delay
    await delay(1000);
    store[campaignType] = mockData.data.filter((campaign) =>
      matchesCampaignType(campaign, campaignType)
    );
  }
  return store[campaignType];
};
