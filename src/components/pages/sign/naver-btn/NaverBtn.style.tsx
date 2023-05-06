import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Naver from "@/assets/naver.png";

export const NaverIdLogin = styled.div`
  display: none;
`;

export const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  background-color: #03c75a;
  border-radius: 6px;
  cursor: pointer;
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
export const NaverIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: url(${Naver}) no-repeat center;
  background-size: 30px;
`;

export const NaverLoginTitle = styled.span`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin-left: 90px;
      color: ${colors.white};
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    `;
  }}
`;
