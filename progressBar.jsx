/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8px',
    padding: 0,
    radius: 4
  },
  medium: {
    height: '12px', 
    padding: 0,
    radius: 4
  },
  large: {
    height: '16px', 
    padding: 4,
    radius: 4
  }
} 

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size];
  return ( 
   <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        height: styles.height,
        borderRadius: styles.radius + 'px',
        padding: styles.padding + 'px'
      }}
    > 
      <WrapperBar>
        <Bar 
          style={{
            height: styles.height,
            width: value + '%'
          }}
        >
        </Bar>
      </WrapperBar>
    </Wrapper>
  );
};

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

const WrapperBar = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;


export default ProgressBar;
