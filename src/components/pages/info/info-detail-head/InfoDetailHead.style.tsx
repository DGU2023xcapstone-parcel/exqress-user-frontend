import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 115%;
      height: 190px;
      margin-top: 50px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      font-size: ${fonts.size.tiny};
      color: ${colors.white};

      background-color: ${colors.main};
    `;
  }}
`;

export const Box = styled.div`
  width: 70px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const State = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 60px;
      height: 60px;

      background-color: ${colors.white};
    `;
  }}
`;

export const Sqare = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 26px;
      height: 26px;

      background-color: ${colors.white};
    `;
  }}
`;
