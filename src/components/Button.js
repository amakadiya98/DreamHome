import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const HowToUseBtn = () => {
  return <StyledButton>How to use?</StyledButton>;
};

const StyledButton = styled(Button)`
  height: 54px;
  text-transform: none;
  color: #fff;
  font-weight: 500;
  padding: 0rem 1.5rem;
  font-size: 18px;
  line-height: 0;
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  border: 1px solid #0DB3B3;
  border-radius: 5px;
  :hover{
    background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  }
  @media (max-width:375px){
    padding: 0rem 0.5rem;
  }
`;
