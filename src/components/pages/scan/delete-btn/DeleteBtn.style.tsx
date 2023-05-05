import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 90%;
      height: 34px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${colors.white};
      font-size: ${fonts.size.medium};

      background-color: ${colors.main};
      border-radius: 10px;
    `;
  }}
`;
