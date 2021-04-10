import React, { useCallback, useState } from "react";
import { Button, Container, Flex, Typography } from "../../components/common";
import { Tabs, Tab } from "../../components/common";
import { CampaignTypes } from "../../types/CampaignTypes";
import { Languages } from "../../types/Languages";
import CampaignList from "./components/CampaignList";
import { strings } from "../../language";

interface Props {}

strings.setLanguage(Languages.ENGLISH);

function Campaigns(props: Props) {
  const [activeType, setActiveType] = useState<CampaignTypes>(
    CampaignTypes.UPCOMING
  );
  const [activeLng, setActiveLng] = useState(Languages.ENGLISH);

  const handleTypeChange = useCallback((type: string) => {
    setActiveType(type as CampaignTypes);
  }, []);

  const changeLanguage = (language: Languages) => {
    setActiveLng(language);
    strings.setLanguage(language);
  };

  const renderLanguageBtn = (language: Languages, label: string) => {
    return (
      <Button
        variant={activeLng === language ? "contained" : "outlined"}
        color="primary"
        onClick={() => changeLanguage(language)}
      >
        {label}
      </Button>
    );
  };

  return (
    <Container>
      <Flex justifyContent="space-between">
        <Typography fontSize="3vw" gutterBottom>
          {strings.manageCampaigns}
        </Typography>
        <div>
          {renderLanguageBtn(Languages.ENGLISH, "English")}
          {renderLanguageBtn(Languages.HINDI, "हिंदी")}
        </div>
      </Flex>
      <Flex margin="3rem 0">
        <Tabs activeTab={activeType} onChange={handleTypeChange}>
          {Object.values(CampaignTypes).map((campaignType) => {
            return (
              <Tab
                key={campaignType}
                eventKey={campaignType}
                title={strings[campaignType]}
              />
            );
          })}
        </Tabs>
      </Flex>
      <CampaignList activeCampaignType={activeType} />
    </Container>
  );
}

export default Campaigns;
