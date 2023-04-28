import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";
import { Grid } from "@mui/material";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { RoomAndThemeType } from "@/components/RoomAndThemeType";
import slider1 from "@/assets/Slider1.png";
import slider2 from "@/assets/Slider2.png";
import leftArrow from "@/assets/leftArrow.png";
import rightArrow from "@/assets/rightArrow.png";

export default function RoomDesign() {
  const [showCompare, setShowCompare] = useState(false);

  const handleSideBySideToCompare = (event) => {
    setShowCompare(event.target.checked);
  };

  return (
    <>
        <Head>
          <title>Newroom | Design Room Preview</title>
          <meta name="description" content="Newroom app sign in with google" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Body>
        <MainContainer>
          <HeadingAndSubHeading />
          <RoomAndThemeType />
          <CompareContainer>
            <SideBySide>Side by side</SideBySide>
            <CompareSwitch onChange={handleSideBySideToCompare} />
            <Compare>Compare</Compare>
          </CompareContainer>
          <SliderContainer>
            <Container>
            <LeftArrow>
              <Image src={leftArrow} />
            </LeftArrow>
            {!showCompare && (
              <Grid container spacing={4}>
                <Grid item sm={6} sx={{ textAlign: "center" }}>
                  <LabelText>Original Room</LabelText>
                  <Image src={slider1} />
                </Grid>
                <Grid item sm={6} sx={{ textAlign: "center" }}>
                  <LabelText>New Room</LabelText>
                  <Image src={slider2} />
                </Grid>
              </Grid>
            )}
            {showCompare && (
              <ReactCompareSlider
                boundsPadding={0}
                itemOne={
                  <ReactCompareSliderImage
                    alt="Image one"
                    src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    alt="Image two"
                    src="https://images.unsplash.com/photo-1437809781432-a957377661ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"
                  />
                }
                position={50}
                style={{
                  height: "482px",
                  width: "92%",
                  borderRadius: 10,
                }}
              />
            )}
            <RightArrow>
              <Image src={rightArrow} />
            </RightArrow>
            </Container>
          </SliderContainer>
          <NavButton>
            <DesignDreamRoom href="/room-design">
              Download HD Photo
            </DesignDreamRoom>
            <DesignDreamRoom
              style={{ border: "2px solid #0DB2B2", background: "#081d23" }}
              href="/room-design"
            >
              Design New Room
            </DesignDreamRoom>
            <DesignDreamRoom
              style={{ background: "#1c3338" }}
              href="/room-design"
            >
              Match Style (Beta)
            </DesignDreamRoom>
          </NavButton>
        </MainContainer>
      </Body>
    </>
  );
}

const Body = styled.div`
  background-color : #0E1A1F;
  overflow: hidden;
  position: relative;
  :after{
    content: "";
    width: 829px;
    height: 829px;
    background: rgba(0, 217, 247, 0.2);
    filter: blur(323.5px);
    position: absolute;
    top: -22%;
    right: -10%;
  }
  :before{
    content: "";
    width: 829px;
    height: 829px;
    background: rgba(0, 217, 247, 0.2);
    filter: blur(323.5px);
    position: absolute;
    bottom: -20%;
    left: -10%;
  }
`;
const Container = styled.div`
position: relative;`
;
const DesignDreamRoom = styled(Link)`
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  border-radius: 5px;
  font-family: "Quicksand";
  display: inline-block;
  background: #0db2b2;
  margin: 42px 0.5rem 136px;
`;

const NavButton = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftArrow = styled.div`
  height: 50px;
  width: 50px;
  background: #223238;
  border: 3px solid #0e1a1f;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -80px;
  top: 50%;
  cursor: pointer;
`;

const RightArrow = styled.div`
  height: 50px;
  width: 50px;
  background: #223238;
  border: 3px solid #0e1a1f;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -80px;
  cursor: pointer;
`;

const LabelText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 1rem 0;
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 50px;
`;

const CompareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const SideBySide = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

const Compare = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

const CompareSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-thumb": {
    color: "#0DB2B2",
    width: 25,
    height: 25,
  },
  "& .MuiSwitch-track": {
    color: "#223238",
    width:95,
    height:35,
    borderRadius: 32,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#fff",
  },
}));
