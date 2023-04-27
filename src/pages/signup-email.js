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
      <MainContainer>
        <SignInHeader>Continue with Email</SignInHeader>
        <SignInLabel>
          We'll check if you have an account, and help you create one if you
          don't.
        </SignInLabel>
        <Container>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item sx={12} sm={8}>
              <InputLabel>Email</InputLabel>
              <InputEmail
                placeholder="julie@example.com"
                inputProps={{ "aria-label": "julie@example.com" }}
              />
            </Grid>
          </Grid>
          <ContinueButton>continue</ContinueButton>
        </Container>
      </MainContainer>
    </>
  );
}

const InputLabel = styled.p`
  text-align: left;
  font-size: 18px;
  padding: 0.5rem 0;
  color: #fff;
  font-weight: bold;
`;

const InputEmail = styled(InputBase)`
  border: 1px solid #fff;
  height: 76px;
  border-radius: 5px;
  font-size: 16px;
  padding: 0rem 2rem;
  color: #fff;
  width: 100%;
`;

const SignInHeader = styled.h1`
  text-align: center;
  font-size: 52px;
  color: #fff;
  margin: 8rem 0 1rem;
  font-family: "Gilroy-Bold";
`;

const SignInLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 0px 5rem;
  text-align: center;
  margin-top: 1rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 12rem;
  text-align: center;
`;

const ContinueButton = styled(Button)`
  background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  border-radius: 5px;
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  height: 52px;
  padding: 0rem 3rem;
  border-radius: 5px;
  text-transform: none;
  margin: 1rem 0;
  :hover{
    background: transparent;
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }
`;
