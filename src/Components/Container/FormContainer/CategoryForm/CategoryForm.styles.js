import { styled } from "styled-components";

export const CustomForm = styled.form`
  display: flex;
  height: 60rem;
  padding: 2.5rem 1.25rem;
  flex-direction: column;
  align-items: center;
  gap: 6.0625rem;
  flex-shrink: 0;
`;

export const CustomP = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  display: flex;
  height: 1.9375rem;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;

export const CustomInput = styled.input`
  display: flex;
  padding: 0.9375rem 0.625rem;
  align-items: center;
  gap: 1.875rem;
  align-self: stretch;

  border-radius: 0.9375rem;
  border: 3px solid ${({ theme }) => theme.colors.bgMenu};
`;

export const CustomTextarea = styled.textarea`
  display: flex;
  height: 8.875rem;
  padding: 0.9375rem 0.625rem;
  align-items: flex-start;
  gap: 1.875rem;
  align-self: stretch;

  border-radius: 0.9375rem;
  border: 3px solid ${({ theme }) => theme.colors.bgMenu};
`;

export const CustomButton = styled.button`
  width: 10.25rem;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.color};
  &:hover {
    box-shadow: 0 0 20px #4f9;
    color: #fff;
    transition: 0.5s;
  }
`;
