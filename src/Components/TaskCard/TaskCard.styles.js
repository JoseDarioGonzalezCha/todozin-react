import { styled } from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.9375rem 0.625rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.bgMenu};
`;

export const DivTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagDivTask = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

export const TagDivButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 15px;
`;

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => (props.checked ? "#a0a603" : "#d9ce96")};
  border: 2px solid ${({ theme }) => theme.colors.colorP};
  border-radius: 5px;
  cursor: pointer;
`;

export const CustomTagP = styled.p`
  color: ${({ theme }) => theme.colors.colorP};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 22px 70px 4px #4f9;
  }
`;

export const TagDivDescription = styled.div`
  margin: 0 auto;
  padding: 0 0.625rem;
  border-bottom: solid ${({ theme }) => theme.colors.bgMenu};
`;

export const TagButtonDescription = styled.div`
  background: none;
  width: 1rem;
  height: 0.99rem;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 22px 70px 4px #4f9;
  }
`;
