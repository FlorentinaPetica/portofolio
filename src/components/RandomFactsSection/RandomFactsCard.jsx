import styled from "styled-components";
import { FaRedo } from "react-icons/fa";

export const FactCard = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const PortfolioQuoteWrapper = styled.div`
max-width: 800px;
width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ContextLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AccentLine = styled.span`
  display: block;
  width: 4rem;
  height: 2px;
  background-color: #00aaff;
  margin-bottom: 1.5rem;
`;

export const SectionLabel = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #00aaff;
  padding-bottom: 1.5rem;
 
    @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const QuoteCard = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  margin-top: 40px;
  cursor: default;
`;

export const QuoteContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuoteBodyBlock = styled.div`
  border-left: 3px solid #00aaff;
  padding-left: 1.5rem;
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

export const QuoteText = styled.p`
  font-size: 1.2rem;
  color: #ffffff;

    @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const QuoteFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 3rem;
  padding-left: 1.5rem;
`;

export const QuoteAuthor = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  color: #ffffff;
`;

export const QuoteRole = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 0.5rem;
  text-align: left;
  color: #00aaff;
`;

export const RefreshButton = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  border: 1px solid #00aaff;
  border-radius: 4px;
  background: transparent;
  color: #00aaff;
  cursor: pointer;

  &:hover {
    background: rgba(0, 170, 255, 0.1);
  }
`;

export const RefreshIcon = styled(FaRedo)`
  font-size: 12px;
`;
