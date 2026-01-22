import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 60px;
  flex-direction: column;
  display: flex;
  width: 590px;
  height: 470px;
  gap: 20px;
`;

export const Label = styled.p`
  font-size: 14px;
  color: #8f8f8f;
`;

export const Value = styled.p`
  font-size: 25px;
  color: black;
  font-weight: 1000;
`;

export const CardContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
flex: 1;
margin-bottom: 20px;
`;

export const RemoveButton = styled.button`
display: flex;
justify-content: center;
margin-left: 350px;
width: 600px;
`;
