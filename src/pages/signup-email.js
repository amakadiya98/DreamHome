import Head from "next/head";
import Link from "next/link";

import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import MainContainer from "@/components/Contianer/MainContainer";

export default function SignInGoogle() {
  return (
    <>
      <Head>
        <title>Newroom | Email Singup</title>
        <meta name="description" content="Newroom app Email Singup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Body>
      <MainContainer>
        <SignInHeader>Continue with Email</SignInHeader>
        <SignInLabel>
          We'll check if you have an account, and help you create one if you
          don't.
        </SignInLabel>
        <Container>
          <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} sx={{width: '90%'}}>
              <Email>
                <InputLabel>Email</InputLabel>
                <InputEmail
                  placeholder="julie@example.com"
                  inputProps={{ "aria-label": "julie@example.com" }}
                />
              </Email>
            </Grid>
          </Grid>
          <ContinueButton>continue</ContinueButton>
        </Container>
      </MainContainer>
    </Body>
    </>
  );
}

const Body = styled.div`
  background-color : #0E1A1F;
  overflow: hidden;
  position: relative;
  z-index: 3;
  :after{
    content: "";
    width: 829px;
    height: 829px;
    background: rgba(0, 217, 247, 0.2);
    filter: blur(323.5px);
    position: absolute;
    top: -22%;
    right: -22%;
    z-index: 2;
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
    z-index: 2;
  }
`;

const InputLabel = styled.p`
  text-align: left;
  font-size: 18px;
  padding: 22px 0;
  color: #fff;
  font-weight: bold;
`;

const InputEmail = styled(InputBase)`
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  padding: 29px 44px;
  color: #fff;
  width: 100%;
  position: relative;
  z-index:9;
`;

const SignInHeader = styled.h1`
  text-align: center;
  font-size: 52px;
  color: #fff;
  margin: 142px 0 15px;
  font-family: "Gilroy-Bold";
  @media (max-width:425px) {
    font-size: 37px;
    width: 86%;
    margin: 78px auto 6px auto;
  }
`;

const SignInLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;
  @media (max-width: 425px) {
    font-size: 14px;
    width: 75%;
    margin: 5px auto 0;
  }
`;

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 190px;
  text-align: center;
  @media (max-width: 425px) {
    margin-top: 28px;
  }
`;

const ContinueButton = styled(Button)`
  color: #ffff;
  font-family: 'Quicksand';
  font-size: 18px;
  text-decoration: none;
  height: 52px;
  padding: 15px 60px;
  background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  border-radius: 5px
  text-transform: none;
  margin: 22px 0;
  position: relative;
  z-index: 9;
    :hover{
    background: transparent;
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }
  @media (max-width: 425px) {
    margin-bottom: 38px;
  }
`;
const Email = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 425px) {
    width: 100%;
  }
`;