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
  xs: '0.625em',
  sm: '0.875em',
  md: '1em',
  lg: '1.125em',
  xl: '1.5em',
};

export const text = (props: TextProps) => `
  text-align: ${props.align || TextAlignment.LEFT};
  font-size: ${sizeMap[props.size || TextSize.md]};
`;

export const Text = styled.p`
  ${m(0)};
  ${text}
`;
