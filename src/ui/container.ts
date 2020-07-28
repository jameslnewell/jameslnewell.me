import styled from 'styled-components';

export const container = (): string => `
  margin: auto;
  width: 100%;
  max-width: 75em;
`;

export const Container = styled.div`
  ${container()}
`;
