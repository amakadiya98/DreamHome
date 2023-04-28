// accord

import { useState } from "react";
import styled from "@emotion/styled";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import plusCircle from "@/assets/plusCircle.png";
import minusIcon from "@/assets/minusIcon.png";
import Image from "next/image";

const DarkBlueAccordion = styled(Accordion)`
  margin: 10px 0;
  border-radius: 10px !important;
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  padding: 36px 52px;
  padding-right: auto;

  @media screen and (max-width: 899px) {
    padding: 24px;
  }

  @media screen and (max-width: 599px) {
    padding: 22px 16px;
    padding-right: 10px;
  }
`;

const QuestionTypography = styled(Typography)`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 599px) {
    font-size: 18px;
    line-height: 22px;
    width: 80%;
  }
`;

const AnswerTypography = styled(Typography)`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #FFFFFF;
`;

const ExpandIcon = styled(Image)`
  width: 40px;
  height: 40px;
`;

const MyAccordion = ({ question, index}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <DarkBlueAccordion>
      <AccordionSummary
        isExpanded={isExpanded}
        expandIcon={<ExpandIcon src={isExpanded ? minusIcon : plusCircle } />}
        aria-controls={index + " -" + "content"}
        id={index + " -" + "header"}
        onClick={toggleAccordion}
      >
        <QuestionTypography>{question.que}</QuestionTypography>
      </AccordionSummary>
      <AccordionDetails>
        <AnswerTypography>{question.summary}</AnswerTypography>
      </AccordionDetails>
    </DarkBlueAccordion>
  );
};

export default MyAccordion;
