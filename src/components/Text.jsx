import styled, {css} from 'styled-components';

const sizes = {
  'xs': '0.8rem',
  'sm': '0.9rem'
};

export default styled.div`
  display: ${({inline}) => inline || 'block'};
  text-align: ${({align}) => align || 'left'};
  ${({size}) => size && css`font-size: ${sizes[size]}`};
`;
