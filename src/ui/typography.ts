import styled from 'styled-components';
import {m} from 'styled-components-spacing';

export enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export interface TextProps {
  align?: TextAlignment;
  size?: TextSize;
}

export enum TextSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

const sizeMap: {[size in TextSize]: string} = {
  xs: '10px', // TODO: ems
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '24px',
};

export const text = (props: TextProps) => `
  text-align: ${props.align || TextAlignment.LEFT};
  font-size: ${sizeMap[props.size || TextSize.md]};
`;

export const Text = styled.p`
  ${m(0)};
  ${text}
`;
