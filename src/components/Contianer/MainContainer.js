import * as React from "react";
import { MainHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styled from "@emotion/styled";

export default function MainContainer({ children }) {
  return (
    <Body>
      <MainHeader />
        {children}
      <Footer />
    </Body>
  );
}


const Body = styled.div``;