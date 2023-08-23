import { styled } from "styled-components";

export const DivContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagH1 = styled.h1`
  color: ${({ theme }) => theme.colors.color};
  font-family: Bebas Neue;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const TagImgMenu = styled.img`
  width: 1.70831rem;
  height: 1.82388rem;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 22px 70px 4px #4f9;
  }
`;

export const TagForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TagImgAbacate = styled.img`
  width: 11rem;
  height: 13.25rem;
  flex-shrink: 0;
  margin: 20px 0;
  &:hover {
    filter: drop-shadow(8px 8px 4px #faea10);
    transition: 0.2s;
  }
`;

export const TagDivSearch = styled.div`
  display: flex;
  padding: 0.375rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.bg};
  &:hover {
    cursor: pointer;
  }
`;

export const TagInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.bgMenu};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const TagDivList = styled.div`
  margin-top: 30px;
  display: flex;
  height: 15.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  flex-shrink: 0;
  align-self: stretch;
`;

export const TagH2 = styled.h2`
  color: ${({ theme }) => theme.colors.color};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const TagDivSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  &:hover {
    cursor: pointer;
    background: rgba(217, 206, 150, 0.5);
    display: flex;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    transition: 0.5s;
  }
`;

export const TagImgSection = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const TagP = styled.p`
  color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
