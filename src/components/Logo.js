import * as React from "react";
import Image from "next/image";

import styled from "@emotion/styled";

import icon from "@/assets/icon.png";
import newroom from "@/assets/newroom.png";

export const MainLogo = () => {
  return (
    <LogoContainer>
      <Image src={icon} alt="Logo" className="icon-logo"/>
      <Image src={newroom} alt="Newroom" className="text-logo"/>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
