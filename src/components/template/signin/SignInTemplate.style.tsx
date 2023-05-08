import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  height: 140px;
  width: 90%;
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Inner = styled.div`
  height: 74px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  width: 300px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Img = styled.img`
  width: 40px;

  border-radius: 5px;

  cursor: pointer;
`;
