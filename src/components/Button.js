import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const HowToUseBtn = () => {
  return <StyledButton>How to use?</StyledButton>;
};

const StyledButton = styled(Button)`
  border: 1px solid #0DB3B3;
  border-radius: 5px;
  text-transform: none;
  color: #fff;
  padding: 16px 28px;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  transition: all 0.3s ease-in;
  position: relative;
  z-index: 9;
  &:hover {
    background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  }
  @media (max-width:390px){
    padding: 0.7rem 0.5rem;
  }
`;
