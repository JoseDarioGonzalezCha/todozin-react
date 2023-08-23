import { styled } from "styled-components";

export const TagAside = styled.aside`
  border-radius: 0.9375rem;
  background: ${({ theme }) => theme.colors.bgTasks};
  height: 100%;

  padding: 2.5rem 1.25rem;
  margin: 10px;
`;
