import styled from "styled-components";

export const TagMain = styled.main`
  display: flex;
`;

export const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagH1 = styled.h1`
  color: ${({ theme }) => theme.colors.colorH};
  text-align: right;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const TagSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const TagDivEyelash = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTasks};
  display: flex;
  width: 8.9375rem;
  height: 4.875rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: ${({ theme }) => theme.colors.bgTasks};
`;

export const TagP = styled.p`
  color: ${({ theme }) => theme.colors.color};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    text-shadow: 0 0 30px #4f9;
    transition: 0.5s;
  }
`;

export const TagButton = styled.button`
  width: 60vw;
  background-color: ${({ theme }) => theme.colors.bgTasks};
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 0.9375rem 0.625rem;
  gap: 1.875rem;
  align-self: stretch;
  border-radius: 0.9375rem;
  border: 3px solid ${({ theme }) => theme.colors.bgMenu};
  color: ${({ theme }) => theme.colors.bgMenu};

  /* Text */
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    text-shadow: 0 0 30px #4f9;
  }
`;

export const TagDivTasks = styled.div`
  border-radius: 0rem 0.9375rem 0.9375rem 0.9375rem;
  background: ${({ theme }) => theme.colors.bgTasks};
`;

export const DivForm = styled.div``;
