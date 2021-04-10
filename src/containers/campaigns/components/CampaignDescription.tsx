import React from "react";
import {
  Flex,
  Image,
  Typography,
  Base,
  Button,
} from "../../../components/common";
import { Campaign } from "../../../types/Campaign";
import { DescriptionContainer } from "./styled-components";

interface Props {
  data: Campaign;
  closeModal?: () => void;
}

function CampaignDescription(props: Props) {
  const {
    data: { name, image_url, region, price },
    closeModal,
  } = props;
  return (
    <DescriptionContainer>
      <Flex alignItems="flex-end">
        <div>
          <Image src={image_url} alt={name} width="13rem" spaceRight />
        </div>
        <div className="grow">
          <Typography
            as="h6"
            fontWeight="bold"
            fontSize="1.6rem"
            transform="uppercase"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            as="div"
            fontStyle="italic"
            transform="uppercase"
            color="grey"
            fontSize="1.4rem"
          >
            {region}
          </Typography>
        </div>
      </Flex>
      <Base margin="2rem 0">
        <Typography as="h3" fontSize="2.4rem" gutterBottom>
          Pricing
        </Typography>
        <Flex justifyContent="space-between">
          <Typography as="div" color="grey" fontSize="1.6rem" gutterBottom>
            1 Week - 1 Month
          </Typography>
          <Typography as="h6" fontSize="1.6rem">
            $ {price.weekly.toFixed(2)}
          </Typography>
        </Flex>
        <Flex justifyContent="space-between">
          <Typography as="div" color="grey" fontSize="1.6rem" gutterBottom>
            6 Months
          </Typography>
          <Typography as="h6" fontSize="1.6rem" gutterBottom>
            $ {price.halfYearly.toFixed(2)}
          </Typography>
        </Flex>
        <Flex justifyContent="space-between">
          <Typography as="div" color="grey" fontSize="1.6rem" gutterBottom>
            1 Year
          </Typography>
          <Typography as="h6" fontSize="1.6rem" gutterBottom>
            $ {price.yearly.toFixed(2)}
          </Typography>
        </Flex>
      </Base>
      <Base margin="1rem 0" className="text-center">
        <Button
          onClick={closeModal}
          variant="outlined"
          color="dark"
          className="text-bold"
        >
          Close
        </Button>
      </Base>
    </DescriptionContainer>
  );
}

export default CampaignDescription;
