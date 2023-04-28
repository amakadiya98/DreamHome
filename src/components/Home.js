import Link from "next/link";
import * as React from 'react';
import styled from "@emotion/styled";
import { Container, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import userFeeback from "@/assets/userFeeback.png";
import normal1 from "@/assets/normal1.png";
import normal2 from "@/assets/normal2.png";
import img3601 from "@/assets/3601.png";
import img3602 from "@/assets/3602.png";
import Rectangle175 from "@/assets/Rectangle175.png";
import Rectangle196 from "@/assets/Rectangle196.png";
import Rectangle195 from "@/assets/Rectangle195.png";
import Rectangle197 from "@/assets/Rectangle197.png";
import Rectangle184 from "@/assets/Rectangle184.png";
import Rectangle185 from "@/assets/Rectangle185.png";
import Rectangle188 from "@/assets/Rectangle188.png";
import Rectangle192 from "@/assets/Rectangle192.png";
import Rectangle193 from "@/assets/Rectangle193.png";
import Rectangle194 from "@/assets/Rectangle194.png";
import DownArrow from "@/assets/down-icon.png";
import connectingArrow from "@/assets/connetingArrow.png";
import firstRight from "@/assets/firstRIght.png";
import firstLeft from "@/assets/firstLeft.png";
import secondRight from "@/assets/secondRight.png";
import secondLeft from "@/assets/secondLeft.png";
import { faqQuestions } from "../../constant";
import MyAccordion from "./Accordion";
import { UseMediaQuery } from "@mui/material";

export const Home = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 599px)');
  const isXSScreen = useMediaQuery('(max-width: 350px)');
  const images = [
    {
      src: Rectangle196,
      alt: 'Slide 1',
    },
    {
      src: Rectangle195,
      alt: 'Slide 2',
    },
    {
      src: Rectangle197,
      alt: 'Slide 3',
    },
    {
      src: Rectangle184,
      alt: 'Slide 4'
    },
    {
      src: Rectangle185,
      alt: 'Slide 5'
    }
  ];

  return (
    <ContainerWrapper>
      <TopSection className="first-section">
        <Container maxWidth='lg' style={{ zIndex: "2" }}>
          <SubHeading>1,300 rooms generated and counting</SubHeading>
          <Heading>
            Design your Dream Rooms with Al.
          </Heading>
          <Tag>Transform Your Space with Our 100% Free Al Themes:</Tag>
          <StrongTag>
            See Your Room in a New Light from Normal Photos to 360 Views.
          </StrongTag>
          <DesignDreamRoom href="/room-design">
            Design your dream room
          </DesignDreamRoom>
        </Container>
        <DownBtnArrow href="">
          <ArrowImage src={DownArrow} />
        </DownBtnArrow>
      </TopSection>
      <PreviewContainer className="second-section">
        <Container maxWidth='lg'>
          <TextSecondContent>
            <PreviewTitle>Normal Photos</PreviewTitle>
            <Grid container columnSpacing={{ xs: 1 }} spacing={0}>
              <Grid item xs={12} sm={6}>
                <PreviewLabel>Before</PreviewLabel>
                <PreviewImage src={normal1} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PreviewLabel>After</PreviewLabel>
                <PreviewImage src={normal2} />
              </Grid>
            </Grid>
          </TextSecondContent>
          <TextSecondContent className="second-360-line">
            <PreviewTitle>360 Photos</PreviewTitle>
            <Grid container columnSpacing={{ xs: 1 }} spacing={0}>
              <Grid item xs={12} sm={6}>
                <PreviewLabel>Before</PreviewLabel>
                <PreviewImage src={img3601} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PreviewLabel>After</PreviewLabel>
                <PreviewImage src={img3602} />
              </Grid>
            </Grid>
          </TextSecondContent>
        </Container>
      </PreviewContainer>

      <HowToUseContainer>
        <Container maxWidth='lg'>
          <HowToUseTag>How to Use?</HowToUseTag>
          <HowToUseDescription>Step-by-Step Guide</HowToUseDescription>
          <StepsContainer>
            <Grid container sx={{ alignItems: "center", maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5} xs={12}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>01</Count>
                  </LeftStepCount>
                  <StepDescription>
                    Click the "Design your dream room" button above.
                  </StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer className="first-meter">
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", flexDirection: isSmallScreen ? 'column-reverse' : 'row', maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }} >
              <Grid item sm={5}></Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5} xs={12}>
                <RightStep>
                  <StepDescription>
                    Choose the photo type you prefer: "Normal Photos" or "360
                    Photos".
                  </StepDescription>
                  <RightStepCount>
                    <StepText>Step</StepText>
                    <Count>02</Count>
                  </RightStepCount>
                </RightStep>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5} xs={12}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>03</Count>
                  </LeftStepCount>
                  <StepDescription>
                    Select the type of room you want to remodel.
                  </StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", flexDirection: isSmallScreen ? 'column-reverse' : 'row', maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }} >
              <Grid item sm={5} ></Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5} xs={12}>
                <RightStep>
                  <StepDescription>
                    Select the type of theme you want to apply to your room.
                  </StepDescription>
                  <RightStepCount>
                    <StepText>Step</StepText>
                    <Count>04</Count>
                  </RightStepCount>
                </RightStep>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5} xs={12}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>05</Count>
                  </LeftStepCount>
                  <StepDescription>Upload your photo.</StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", flexDirection: isSmallScreen ? 'column-reverse' : 'row', maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5}></Grid>
              <Grid item sm={2} xs={12} sx={{ display: isSmallScreen ? "none" : 'block' }}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5} xs={12}>
                <RightStep>
                  <StepDescription>
                    Click "Design Your Room" and wait for the magic to happen.
                  </StepDescription>
                  <RightStepCount>
                    <StepText>Step</StepText>
                    <Count>06</Count>
                  </RightStepCount>
                </RightStep>
              </Grid>
            </Grid>
          </StepsContainer>
        </Container>
      </HowToUseContainer>
      <OutputSample>
        <Container maxWidth='lg'>
          <Grid container direction="row">
            <GridContent container item sm={12} md={5} className="outputSmapleText">
              <InnerContent >
                <SampleOutputTag>
                  More Options, Better Choices
                </SampleOutputTag>
              </InnerContent>
              <InnerContentBottom>
                <SampleOutputDescription>
                  With the Variation Results feature, you don't have to settle for
                  just 1 design, you can receive up to 4 different design options
                  in a single generation, allowing you to choose the most
                  desirable one and download it. This feature gives you the
                  ability to explore different styles and find the perfect design
                  for your room.
                </SampleOutputDescription>
              </InnerContentBottom>
            </GridContent>
            <Grid container item sm={12} md={7}>
              <CarasoleContainer>
                <BeforeText><Liner />Before</BeforeText>
                <Image175 src={Rectangle175} />
                <Image196 src={Rectangle196} />
                <Image195 src={Rectangle195} />
                <Image197 src={Rectangle197} />
                <Image184 src={Rectangle184} />
                <Image185 src={Rectangle185} />
                <Image200 src={connectingArrow} />
                <AfterText><Liner />After</AfterText>
              </CarasoleContainer>
            </Grid>
          </Grid>
        </Container>
      </OutputSample>
      <BeforeAfterContainer>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item container sm={12} md={6}>
              <MainDiv>
                <TopDiv>
                  <SingleBox>
                    <FourGridImage src={Rectangle188} alt="1" />
                    <DecoratedText>< Liner />Before</DecoratedText>
                  </SingleBox>
                  <SingleBox>
                    <FourGridImage src={Rectangle193} alt="1" />
                    <DecoratedText>< Liner />After</DecoratedText>
                  </SingleBox>
                  <ImageContainer>
                    <LeftImage src={firstLeft} alt="leftImg" />
                    <BfText>Before</BfText>
                    <RightImage src={firstRight} alt="RightImg" />
                    <AfText>After</AfText>
                  </ImageContainer>
                </TopDiv>
                <TopDiv>
                  <SingleBox>
                    <FourGridImage src={Rectangle192} alt="1" />
                    <DecoratedText>< Liner />Before</DecoratedText>
                  </SingleBox>
                  <SingleBox>
                    <FourGridImage src={Rectangle194} alt="1" />
                    <DecoratedText>< Liner />After</DecoratedText>
                  </SingleBox>
                  <ImageContainer>
                    <LeftImage src={firstLeft} alt="leftImg" />
                    <BfText>Before</BfText>
                    <RightImage src={firstRight} alt="RightImg" />
                    <AfText>After</AfText>
                  </ImageContainer>
                </TopDiv>
              </MainDiv>
            </Grid>
            <Grid item container sm={12} md={6} style={{ alignItems: 'center' }}>
              <DesignTextInfo>
                <DesignConsistency>
                  Consistency in Design Made Easy
                </DesignConsistency>
                <ConsistencyText>
                  If you loved the design of your previous room and want to maintain
                  the same theme setting for multiple rooms in your house, our Match
                  Style feature is here to help. Simply click the button after
                  generating your room photo, and our Al- powered tool will generate
                  similar style options for your other rooms. This feature not only
                  saves you time, but it also ensures consistency in design,
                  especially if you're an interior designer.
                </ConsistencyText>
              </DesignTextInfo>
            </Grid>
          </Grid>
        </Container>
      </BeforeAfterContainer>
      <FAQContainer>
        <Container maxWidth='lg'>
          <FAQTag>F A Q</FAQTag>
          <ContentTab>
            {faqQuestions.map((question, index) => (
              <MyAccordion question={question} index={index} />
            ))}
          </ContentTab>
        </Container>
      </FAQContainer>
      <FeedbackContainer>
        <Container maxWidth='lg'>
          <FeedbackHeading>What Our Users Are Saying</FeedbackHeading>
          <FeedbackSubheading>
            Reviews from Over 13,000 Satisfied Customers
          </FeedbackSubheading>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 6, md: 4 }}
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item key={index}>
                <FeedbackCard>
                  <Grid container item xs={12} >
                    <Grid item xs={3}>
                      <Image src={userFeeback} style={{ margin: "1rem" }} />
                    </Grid>
                    <Grid item xs={9} sx={{ paddingLeft: isXSScreen ? '15px' : '0' }}>
                      <FeedbackUser>Sarah Johnson</FeedbackUser>
                      <FeedbackUserJob>Interior Designer</FeedbackUserJob>
                    </Grid>
                  </Grid>
                  <UserFeeback>
                    "I was blown away by how easy it was to use this AI-powered
                    tool. The results were stunning and my clients loved it!"
                  </UserFeeback>
                </FeedbackCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeedbackContainer>
      <FooterWrapper>
        <Container maxWidth='lg'>
          <FooterBanner>
            <BottomLeftOverlay />
            <TopRigthOverlay />
            <FooterTag>Ready to design your dream room?</FooterTag>
            <FooterSubTag>
              Try our free Al room design tool and experience the power of
              Al-powered
              interior design software today!
            </FooterSubTag>
            <DesignDreamRoom href="/room-design">
              Design your dream room
            </DesignDreamRoom>
          </FooterBanner>
        </Container>
      </FooterWrapper>
    </ContainerWrapper>
  );
};

const BfText = styled.div`
  display: flex;
  height: 20px;
  padding-left: 8px;
  border-left: 2px solid #0DB3B3;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  bottom: 22%;
  left: 15%;

  @media screen and (max-width: 400px) {
    bottom: 28%;
    left: 10%;
  }

  @media screen and (max-width: 350px) {
    left: 5%;
  }
`;

const AfText = styled.div`
  display: flex;
  height: 20px;
  padding-left: 8px;
  border-left: 2px solid #0DB3B3;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  bottom: 22%;
  right: 10%;

  @media screen and (max-width: 400px) {
    bottom: 28%;
    right: 22%;
  }

  @media screen and (max-width: 350px) {
    right: 30%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 auto;


  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const LeftImage = styled(Image)`
  position: absolute;
  left: 7%;
  bottom: 43%;
  width: 164px;
  height: 147px;
  z-index: 10;

  @media screen and (max-width: 400px) {
    width: 140px;
    height: 125px;
    bottom: 50%;
  }

  @media screen and (max-width: 350px) {
    left: 0;
  }
`;

const RightImage = styled(Image)`
  position: absolute;
  right: 5%;
  width: 226px;
  height: 202px;
  z-index: 6;

  @media screen and (max-width: 400px) {
    right: 15%;
    width: 200px;
    height: 180px;
  }

  @media screen and (max-width: 350px) {
    right: 27%;
  }
`;
const ContentTab = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 599px) {
    height: 250px;
  }
`;

const SingleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const FourGridImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const GridContent = styled(Grid)`
  &.outputSmapleText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 1100px) {
      padding-top: 7rem;
    }

    @media screen and (max-width: 899px) {
      padding-top: 5rem;
    }
  }
`;

const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 899px) {
    justify-content: center;
  }
`;

const InnerContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DesignTextInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-left: 1.5rem;

  @media screen and (max-width: 899px) {
    padding-top: 3rem;
    padding-left: 0;
  }

`

const BeforeText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: -5%;
  left: 38%;
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  
  @media screen and (max-width: 1100px) {
    top: -3%;
    left: 56%;
  }

  @media screen and (max-width: 500px) {
    left: 48%;
  }

  @media screen and (max-width: 450px) {
    left: 45%;
  }

  @media screen and (max-width: 350px) {
    left: 35%;
  }
`;
const Liner = styled.span`
  display: block;
  width: 3px;
  height: 20px;
  background-color: #0DB3B3;
`;
const AfterText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: -42%;
  right: -13%;
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px; 

  @media screen and (max-width: 1100px) {
    bottom: -5%;
    right: 29%; 
  }

  @media screen and (max-width: 500px) {
    right: unset;
    left: 50%;
  }

  @media screen and (max-width: 450px) {
    left: 45%;
  }

  @media screen and (max-width: 350px) {
    left: 35%;
  }
`;

const FooterWrapper = styled.div`
  background-color: #0D1A1E;`
  ;
const TopRigthOverlay = styled.div`
  position: absolute;
  top: -264px;
  right: -173px;
  width: 330px;
  height: 400px;
  background: #0DB3B3;
  filter: blur(85.5px);
`
const BottomLeftOverlay = styled.div`
  position: absolute;
  bottom: -264px;
  left: -173px;
  width: 330px;
  height: 400px;
  background: #0DB3B3;
  filter: blur(85.5px);
`;
const CenterLine = styled.div`
  width: 2px;
  background: #fff;
  height: 100%;
  position: absolute;
  left: 50%;

  @media screen and (max-width: 599px) {
    height: 70%;
    top: 0;
  }
`;

const MeterContainer = styled.div`
  position: relative;
  height: 150px;

  @media screen and (max-width: 599px) {
    height: 80px;
  }
`;

const LeftLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;
const RightLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;
  margin-left: 50%;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const Meter = styled.div`
  width: 20px;
  background: #0db2b2;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #ffffff;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6001;

  @media screen and (max-width: 599px) {
    top: 84%;
  }
`;

const StepsContainer = styled.div`
  margin: 100px 0;
 
`;

const LeftStep = styled.div`
  display: flex;
  background: #223238;
  height: 7rem;
  color: #fff;
  border-radius: 4rem 10px 10px 4rem;
`;

const RightStep = styled.div`
  display: flex;
  background: #223238;
  height: 7rem;
  color: #fff;
  border-radius: 10px 4rem 4rem 10px;
`;

const LeftStepCount = styled.div`
  border-radius: 50%;
  width: 94px;
    height: 94px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #223238;
    border: 11px solid #0E1A1F;
    min-width: 94px;
    min-height: 94px;
    margin-top: -2px;
`;

const RightStepCount = styled.div`
border-radius: 50%;
width: 94px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #223238;
  border: 11px solid #0E1A1F;
  min-width: 94px;
  min-height: 94px;
  margin-top: -2px;
`;

const StepText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;

color: #FFFFFF;
`;

const Count = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
font-family: "Gilroy-Bold";
`;

const StepDescription = styled.p`
  font-size: 16px;
  align-self: center;
  padding: 0 1rem;
  text-align: left;
  font-family: "Quicksand";
  font-weight: bold;

  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`;

const ContainerWrapper = styled.div`
  text-align: center;
  position: relative;
  background-color: #0D1A1E;
  padding-bottom: 8rem;
  margin-top: -135px;
  padding-top: 120px;
`;

const SubHeading = styled.h2`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #0DB3B3;

  @media screen and (max-width: 599px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 82px;
  line-height: 102px;
  font-family: "Gilroy-Bold";
  font-weight: 700;

  @media screen and (max-width: 599px) {
    font-size: 36.7px;
    line-height: 45px;
    text-align: center;
  }
`;

const Tag = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 0.8rem;

  @media screen and (max-width: 599px) {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
`;

const StrongTag = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.4rem;
  font-family: 'Quicksand';
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

const TopSection = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 6rem 0 3rem;
  overflow: hidden;
  z-index: 0;
  background-color: #132024;
  
  &.first-section{
    padding: 6rem 0 100px !important;
    overflow: visible;
    z-index: 1;
    background-color: transparent;
  }
  
`;

const DesignDreamRoom = styled(Link)`
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  line-height: 22px;
  padding: 18px 42px;
  border-radius: 5px;
  font-family: "Quicksand";
  font-weight: 700;
  display: inline-block;
  background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  margin: 2rem 0;
  border: 1px solid transparent;
  position: relative;
  z-index: 10;

  &:hover {
    background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }

  @media (max-width: 375px) {
    padding: 18px 10px;
  }
`;
const DownBtnArrow = styled(Link)`
  width: 62px;
  height: 62px;
  background: #223238;
  border: 11px solid #0E1A1F;
  position: absolute;
  bottom: -46px;
  border-radius: 50%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowImage = styled(Image)`
`;
const HowToUseContainer = styled.div`
  padding: 4rem 0 2rem;
  background: #131f23;
`;

const HowToUseTag = styled.p`
  color: #fff;
  font-weight: 500;
  font-family: "Gilroy-Bold";
  font-size: 52px;
  line-height: 64px;
  text-align: center;
  font-weight: 500;

  @media screen and (max-width: 599px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

const HowToUseDescription = styled.p`
  color: #fff;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  font-weigth: 700;
  font-family: "Quicksand";
  font-weight: bold;

  @media screen and (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const PreviewContainer = styled.div`
  padding: 4rem 0;
    &.second-section{
      position: relative;
      overflow: hidden;
      padding-top: 80px;
      padding-bottom: 160px;
      &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0e1d21;
        border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        transform: scaleX(2.7);
      }
      &::after{
        content: '';
        position: absolute;
        width: 629px;
        height: 629px;
        top: 405px;
        left: -300px;
        background: rgba(0, 217, 247, 0.1);
        filter: blur(200px);
        border-radius: 50%;
      }
    }
`;
const TextSecondContent = styled.div`
    position: relative;
    &.second-360-line{
      margin-top: 100px;
    }
`;
const PreviewTitle = styled.p`
  font-size: 52px;
  font-family: 'Gilroy-Bold';
  font-weight: 500;
  line-height: 64px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 599px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

const PreviewLabel = styled.p`
  font-size: 20px;
  margin: 1rem;
  color: #fff;
`;

const PreviewImage = styled(Image)`
  width: 95%;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

const OutputSample = styled.div`
  padding: 5rem 0;
  padding-bottom: 14rem;
  background-color: #0D1A1E;

  @media screen and (max-width: 899px) {
    padding: 0;
    padding-bottom: 20rem;
  }
`;

const SampleOutputTag = styled.p`
  color: #fff;
  font-size: 36px;
  line-height: 45px;
  font-weight: 700;
  font-family: "Gilroy-Bold";
  text-align: left;
  margin-top: 4rem;
  margin-bottom: 1rem;
  width: 55%;

  @media screen and (max-width: 1100px) {
    width: 70%;
  }

  @media screen and (max-width: 899px) {
    margin-top: 0;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const SampleOutputDescription = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 899px) {
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const CarasoleContainer = styled.div`
  position: relative;

  @media screen and (max-width: 899px) {
    left: 14%;
    top: 10%;
  }

  @media screen and (max-width: 599px) {
    left: 0;
  }
`;

const Image197 = styled(Image)`
  position: absolute;
  top: 50%;
  left: 58%;
  z-index: 6002;

  @media screen and (max-width: 1100px) {
    top: 80%;
    left: 19%;
  }

  @media screen and (max-width: 899px) {
    top: 105%;
  }

  @media screen and (max-width: 500px) {
    left: 9%;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: auto;
  }
  @media screen and (max-width: 350px) {
    left: 0;
  }
`;

const Image195 = styled(Image)`
  position: absolute;
  left: 50%;
  top: 56%;

  @media screen and (max-width: 1100px) {
    left: 11%;
    top: 84%;
  }
  @media screen and (max-width: 899px) {
    top: 110%;
  }

  @media screen and (max-width: 500px) {
    left: 0;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Image196 = styled(Image)`
  position: absolute;
  top: 66%;
  left: 46%;

  @media screen and (max-width: 1100px) {
    left: 10%;
    top: 92%;
  }
  @media screen and (max-width: 899px) {
    top: 120%;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Image175 = styled(Image)`
  position: relative;
  left: 0;
  @media screen and (max-width: 1100px) {
    left: 15%;
  }

  @media screen and (max-width: 500px) {
    left: 5%;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: auto;
  }

  @media screen and (max-width: 350px) {
    left: 0;
  }
`;

const Image184 = styled(Image)`
  position: absolute;
  top: 56%;
  left: 86%;
  z-index: 6001;

  @media screen and (max-width: 1100px) {
    top: 83%;
    left: 47%;
  }

  @media screen and (max-width: 899px) {
    top: 110%;
  }

  @media screen and (max-width: 500px) {
    left: 39%;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const Image200 = styled(Image)`
  position: absolute;
  top: 25%;
  right: -15%;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Image185 = styled(Image)`
  position: absolute;
  top: 66%;
  left: 111%;

  @media screen and (max-width: 1100px) {
    top: 90%;
    left: 70%;
  }

  @media screen and (max-width: 899px) {
    top: 120%;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BeforeAfterContainer = styled.div`
  padding: 4rem 0;
  background-color: #0D1A1E;

  @media screen and (max-width: 899px) {
    padding-top: 8rem;
  }
`;

const DesignConsistency = styled.p`
  font-family: 'Gilroy-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #fff;
  text-align: left;
  width: 70%;

  @media screen and (max-width: 1100px) {
    width: 85%;
  }

  @media screen and (max-width: 899px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const ConsistencyText = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #fff;
  text-align: left;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

const DecoratedText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
`;

const FAQContainer = styled.div`
  padding: 4rem 0;
  background-color: #0D1A1E;
`;

const FAQTag = styled.h5`
  font-family: 'Gilroy-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  font-family: "Gilroy-Bold";
  font-weight: 500;
`;

const FAQCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  background: #064545;
  border-radius: 10px;
  margin: 0.5rem 0;
`;

const FAQQuestion = styled.p`
  text-align: left;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  padding: 2.2rem;
`;

const FAQToggle = styled(Image)`
  margin: 2rem;
  cursor: pointer;
`;

const FeedbackContainer = styled.div`
  padding: 4rem 0 10rem;
  background-color: #0D1A1E;
`;

const FeedbackHeading = styled.p`
  font-size: 52px;
  color: #fff;
  margin: 1rem 0;
  font-family: "Gilroy-Bold";
  font-weight: 500;

  @media screen and (max-width: 599px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
`;

const FeedbackSubheading = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;

  @media screen and (max-width: 599px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const FeedbackCard = styled.div`
  border: 1px solid #fff;
  height: 210px;
  width: 310px;
  border-radius: 10px;
  padding: 2rem 0 0;

  @media screen and (max-width: 599px) {
    width: 90%;
    margin: 5px auto;
  }
`;

const FeedbackUser = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: left;
  margin-top: 1rem;
  font-weight: bold;

  @media screen and (max-width: 599px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

const FeedbackUserJob = styled.p`
  font-size: 15px;
  text-align: left;
  color: #fff;
  margin-top: 0.2rem;

  @media screen and (max-width: 599px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const UserFeeback = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  text-align: left;
  margin: 0 1rem 0rem 1rem;

  @media screen and (max-width: 599px) {
    font-size: 15px;
    line-height: 163%;
  }
`;

const FooterBanner = styled.div`
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  max-width: 95%;
  margin: 0 auto;
`;

// #0db2b2 for adding gradient in footer banner

const FooterTag = styled.p`
  font-size: 42px;
  font-weight: bold;
  font-family: "Gilroy-Bold";
  font-weight: 500;
  color: #fff;
  padding: 2rem 0 1rem;
  position: relative;
  z-index: 5;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 599px) {
    font-size: 27.5px;
    line-height: 32px;
    text-align: center;
  }
`;

const FooterSubTag = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "Quicksand";
  position: relative;
  z-index: 7;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 899px) {
    width: 90%;
  }
`;
