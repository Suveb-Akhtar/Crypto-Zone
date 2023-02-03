import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/110820273?s=400&u=3cbcac92fdd219f0463707e6f3cea737d1f4db05&v=4";

const Footer = () => {
  return (
    <Box
      // bgColor={"blackAlpha.900"}
      bgColor={"blue.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Suveb Akhtar</Text>
          <Text>( Our Founder )</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
