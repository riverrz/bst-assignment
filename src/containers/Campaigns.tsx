import React, { useCallback, useState } from "react";
import { Container, Flex, Typography } from "../components/common";
import { Tabs, Tab } from "../components/common";
import { CampaignTypes } from "../types/CampaignTypes";

interface Props {}

function Campaigns(props: Props) {
  const [activeType, setActiveType] = useState<CampaignTypes>(
    CampaignTypes.UPCOMING
  );

  const handleTypeChange = useCallback((type: string) => {
    setActiveType(type as CampaignTypes);
  }, []);

  return (
    <Container>
      <Typography fontSize="3vw" gutterBottom>
        Manage Campaigns
      </Typography>
      <Flex margin="3rem 0">
        <Tabs activeTab={activeType} onChange={handleTypeChange}>
          {Object.values(CampaignTypes).map((campaignType) => {
            return (
              <Tab
                key={campaignType}
                eventKey={campaignType}
                title={campaignType}
              />
            );
          })}
        </Tabs>
      </Flex>
    </Container>
  );
}

export default Campaigns;
