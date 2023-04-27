import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import { MainLogo } from "@/components/Logo";
import { HowToUseBtn } from "@/components/Button";

export const MainHeader = () => {
  return (
    <HeaderContianer>
      <Container maxWidth="lg">
        <HeaderContent>
          <MainLogo />
          <HowToUseBtn />
        </HeaderContent>
      </Container>
    </HeaderContianer>
  );
};

const HeaderContianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 217, 247, 0.1);
  flex: 1 1 auto;
  margin: 0;
  padding: 1.5rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeadingAndSubHeading = () => {
  return (
    <Containers>
      <SubHeading>1,300 rooms generated and counting</SubHeading>
      <Heading>Design your Dream Rooms</Heading>
    </Containers>
  );
};

const Containers = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const SubHeading = styled.h2`
  color: #0db2b2;
  font-size: 20px;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 82px;
  font-family: "Gilroy-Bold";
  font-weight: 500;
`;
