import Link from "next/link";

import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import Image from "next/image";

import userFeeback from "@/assets/userFeeback.png";
import plusCircle from "@/assets/plusCircle.png";
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

import { faqQuestions } from "../../constant";

export const Home = () => {
  return (
    <ContainerWrapper>
      <TopSection>
        <Container maxWidth='lg' style={{ zIndex: "2" }}>
          <SubHeading>1,300 rooms generated and counting</SubHeading>
          <Heading>
            Design your Dream Rooms
            <br />
            with Al.
          </Heading>
          <Tag>Transform Your Space with Our 100% Free Al Themes:</Tag>
          <StrongTag>
            See Your Room in a New Light from Normal Photos to 360 Views.
          </StrongTag>
          <DesignDreamRoom href="/room-design">
            Design your dream room
          </DesignDreamRoom>
        </Container>
      </TopSection>
      <PreviewContainer>
        <Container maxWidth='lg'>
          <PreviewTitle>Normal Photos</PreviewTitle>
          <Grid container columnSpacing={{ xs: 1 }} spacing={0}>
            <Grid item xs={6}>
              <PreviewLabel>Before</PreviewLabel>
              <PreviewImage src={normal1} />
            </Grid>
            <Grid item xs={6}>
              <PreviewLabel>After</PreviewLabel>
              <PreviewImage src={normal2} />
            </Grid>
          </Grid>
        </Container>
      </PreviewContainer>
      <PreviewContainer>
        <Container maxWidth='lg'>
          <PreviewTitle>360 Photos</PreviewTitle>
          <Grid container columnSpacing={{ xs: 1 }} spacing={0}>
            <Grid item xs={6}>
              <PreviewLabel>Before</PreviewLabel>
              <PreviewImage src={img3601} />
            </Grid>
            <Grid item xs={6}>
              <PreviewLabel>After</PreviewLabel>
              <PreviewImage src={img3602} />
            </Grid>
          </Grid>
        </Container>
      </PreviewContainer>
      <HowToUseContainer>
        <Container maxWidth='lg'>
          <HowToUseTag>How to Use?</HowToUseTag>
          <HowToUseDescription>Step-by-Step Guide</HowToUseDescription>
          <StepsContainer>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sm={5}>
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
              <Grid item sm={2}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sm={5}></Grid>
              <Grid item sm={2}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}>
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
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sm={5}>
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
              <Grid item sm={2}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sm={5}></Grid>
              <Grid item sm={2}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}>
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
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sm={5}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>05</Count>
                  </LeftStepCount>
                  <StepDescription>Upload your photo.</StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sm={5}></Grid>
              <Grid item sm={2}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}>
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
            <Grid container item xs={12} sm={5}>
              <Grid item>
                <SampleOutputTag>
                  More Options,
                  <br />
                  Better Choices
                </SampleOutputTag>
              </Grid>
              <Grid item>
                <SampleOutputDescription>
                  With the Variation Results feature, you don't have to settle for
                  just 1 design, you can receive up to 4 different design options
                  in a single generation, allowing you to choose the most
                  desirable one and download it. This feature gives you the
                  ability to explore different styles and find the perfect design
                  for your room.
                </SampleOutputDescription>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={7}>
              <CarasoleContainer>
                <Image src={Rectangle175} />
                <Image196 src={Rectangle196} />
                <Image195 src={Rectangle195} />
                <Image197 src={Rectangle197} />
                <Image184 src={Rectangle184} />
                <Image185 src={Rectangle185} />
              </CarasoleContainer>
            </Grid>
          </Grid>
        </Container>
      </OutputSample>
      <BeforeAfterContainer>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item container xs={12} sm={6}>
              <Grid container item xs={12} sm={6} spacing={0}>
                <Grid item>
                  <Image src={Rectangle188} />
                  <DecoratedText>Before</DecoratedText>
                </Grid>
                <Grid item >
                  <Image src={Rectangle193} />
                  <DecoratedText>Before</DecoratedText>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} spacing={0} style={{ marginInlineStart: '-30px' }}>
                <Grid item>
                  <Image src={Rectangle192} />
                  <DecoratedText>After</DecoratedText>
                </Grid>
                <Grid item >
                  <Image src={Rectangle194} />
                  <DecoratedText>After</DecoratedText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={6}>
              <DesignConsistency>
                Consistency in Design
                <br />
                Made Easy
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
            </Grid>
          </Grid>
        </Container>
      </BeforeAfterContainer>
      <FAQContainer>
        <Container maxWidth='lg'>
          <FAQTag>FAQ</FAQTag>
          {faqQuestions.map((question, index) => (
            <FAQCard key={index}>
              <FAQQuestion>{question}</FAQQuestion>
              <FAQToggle src={plusCircle} />
            </FAQCard>
          ))}
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
                  <Grid container item xs={12}>
                    <Grid item xs={3}>
                      <Image src={userFeeback} style={{ margin: "1rem" }} />
                    </Grid>
                    <Grid item xs={9}>
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
            <br />
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

const FooterWrapper = styled.div``;
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
`;

const MeterContainer = styled.div`
  position: relative;
  height: 170px;
`;

const LeftLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;
`;
const RightLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;
  margin-left: 50%;
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
`;

const StepsContainer = styled.div`
  margin: 3rem 0;
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
  width: 6rem;
  border: 0.9rem solid #0e1a1f;
  border-radius: 100%;
`;

const RightStepCount = styled.div`
  width: 7rem;
  border: 0.9rem solid #0e1a1f;
  border-radius: 100%;
`;

const StepText = styled.p`
  margin-top: 0.7rem;
  font-size: 17px;
`;

const Count = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const StepDescription = styled.p`
  font-size: 16px;
  align-self: center;
  padding: 0 1rem;
  text-align: left;
  font-family: "Quicksand";
  font-weight: bold;
`;

const ContainerWrapper = styled.div`
  text-align: center;
  position: relative;
`;

const SubHeading = styled.h2`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #0DB3B3;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 82px;
  line-height: 102px;
  font-family: "Gilroy-Bold";
  font-weight: 700;
`;

const Tag = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 0.8rem;
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
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 217, 247, 0.1);
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

  &:hover {
    background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }
`;

const HowToUseContainer = styled.div`
  padding: 4rem 0 2rem;
  background: #131f23;
`;

const HowToUseTag = styled.p`
  color: #fff;
  font-weight: 700;
  font-family: "Gilroy-Bold";
  font-size: 52px;
  line-height: 64px;
  text-align: center;
`;

const HowToUseDescription = styled.p`
  color: #fff;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  font-weigth: 700;
  font-family: "Quicksand";
  font-weight: bold;
`;

const PreviewContainer = styled.div`
  padding: 4rem 0;
`;

const PreviewTitle = styled.p`
  font-size: 52px;
  font-weight: 700;
  font-family: 'Gilroy-Bold';
  line-height: 64px;
  text-align: center;
  color: #fff;
`;

const PreviewLabel = styled.p`
  font-size: 20px;
  margin: 1rem;
  color: #fff;
`;

const PreviewImage = styled(Image)`
width: 95%;
`;

const OutputSample = styled.div`
  padding: 14rem 0;
  padding-top: 5rem;
`;

const SampleOutputTag = styled.p`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  margin-top: 4rem;
`;

const SampleOutputDescription = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: left;
`;

const CarasoleContainer = styled.div`
  position: absolute;
`;

const Image197 = styled(Image)`
  position: absolute;
  top: 50%;
  left: 58%;
  z-index: 6002;
`;

const Image195 = styled(Image)`
  position: absolute;
  left: 50%;
  top: 56%;
`;

const Image196 = styled(Image)`
  position: absolute;
  top: 66%;
  left: 46%;
`;

const Image184 = styled(Image)`
  position: absolute;
  top: 56%;
  left: 86%;
  z-index: 6001;
`;

const Image185 = styled(Image)`
  position: absolute;
  top: 66%;
  left: 111%;
`;

const BeforeAfterContainer = styled.div`
  padding: 4rem 0;
`;

const DesignConsistency = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-top: 10rem;
  text-align: left;
  height: 0;
`;

const ConsistencyText = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: left;
`;

const DecoratedText = styled.p`
  color: #fff;
  font-weight: bold;
  border-left: 3px solid #0db2b2;
  display: inline-block;
  padding-left: 8px;
`;

const FAQContainer = styled.div`
  padding: 4rem 0;
`;

const FAQTag = styled.p`
  font-size: 52px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 2rem;
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
  padding: 4rem 0;
`;

const FeedbackHeading = styled.p`
  font-size: 52px;
  font-weight: bold;
  color: #fff;
  margin: 1rem 0;
`;

const FeedbackSubheading = styled.p`
  font-size: 20px;
  color: #fff;
`;

const FeedbackCard = styled.div`
  border: 1px solid #fff;
  height: 210px;
  width: 310px;
  border-radius: 10px;
  padding: 2rem 0 0;
`;

const FeedbackUser = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: left;
  margin-top: 1rem;
  font-weight: bold;
`;

const FeedbackUserJob = styled.p`
  font-size: 15px;
  text-align: left;
  color: #fff;
  margin-top: 0.2rem;
`;

const UserFeeback = styled.p`
  font-size: 15px;
  color: #fff;
  text-align: left;
  margin: 0 1rem 0rem 1rem;
`;

const FooterBanner = styled.div`
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  border-radius: 25px;
  margin: 5rem 0;
  margin-bottom: 6.5rem;
  position: relative;
  overflow: hidden;
`;

// #0db2b2 for adding gradient in footer banner

const FooterTag = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  padding: 2rem 0 1rem;
`;

const FooterSubTag = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "Quicksand";
`;
