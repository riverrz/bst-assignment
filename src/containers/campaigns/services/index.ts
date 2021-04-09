import { matchesCampaignType } from "../../../helpers";
import { Campaign } from "../../../types/Campaign";
import { CampaignTypes } from "../../../types/CampaignTypes";
import { delay } from "../../../utils/delay";
import mockData from "./mockData.json";

// Acts like frontend cache for the data, can be implemented using redux as well
const store: { [campaignType: string]: Campaign[] } = {};

// Get the data based on activeType from store
export const getCampaigns = async (campaignType: CampaignTypes) => {
  // If not present then fetch the data
  if (!store[campaignType]) {
    // artifical delay
    await delay(1000);
    const data = mockData.data.filter((campaign) =>
      matchesCampaignType(campaign, campaignType)
    );

    // sort by createdDate in increasing order
    data.sort(
      (a, b) =>
        new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime()
    );

    store[campaignType] = data;
  }
  return store[campaignType];
};

// Used for inserting the updated campaign in appropriate place and campaign type
export function updateCampaignScheduleDate(
  campaign: Campaign,
  date: Date,
  currentlyActiveType: CampaignTypes
) {
  // 1.) Update campaign's date
  // 2.) Get possibly new campaign type based on new date
  // 3.) Remove campaign from its current type
  // 4.) Insert it in new type using insert method of insertion sort.

  // Update date
  const newCampaign = { ...campaign, createdOn: date.getTime() };

  // Possibly find new campaign type
  let newCampaignType: CampaignTypes;
  if (matchesCampaignType(newCampaign, CampaignTypes.LIVE)) {
    newCampaignType = CampaignTypes.LIVE;
  } else if (matchesCampaignType(newCampaign, CampaignTypes.PAST)) {
    newCampaignType = CampaignTypes.PAST;
  } else {
    newCampaignType = CampaignTypes.UPCOMING;
  }

  // Remove from current type
  store[currentlyActiveType] = store[currentlyActiveType].filter(
    ({ id }) => id !== newCampaign.id
  );

  // Push to newCampaignType
  store[newCampaignType] = store[newCampaignType].concat(newCampaign);

  const campaigns = [...store[newCampaignType]];

  // Corrently set the index for the newCampaign
  for (let i = campaigns.length - 2; i > -1; i--) {
    const campaign = campaigns[i];
    if (newCampaign.createdOn >= campaign.createdOn) {
      break;
    }
    // Swapping
    campaigns[i] = newCampaign;
    campaigns[i + 1] = campaign;
  }
  store[newCampaignType] = campaigns;

  return store[currentlyActiveType];
}
