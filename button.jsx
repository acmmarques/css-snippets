import React, { Component } from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    fontSize: 16,
    padding: '8px 16px',
  },
  medium: {},
  large: {
    fontSize: '21px',
    padding: '20px 36px',
    borderRadius: '4px',
  }
}

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];
  
  // Initializing a variable Component which is going to vary 
  // according with the value of {variant}
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === 'outline') {
    Component = OutlineButton;
  } else {
    Component = GhostButton
  };

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  padding: 16px 24px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: 18px;
  border-radius: 2px;
  border: 2px solid transparent;

  &:focus {
    outline-offset: 4px;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite}
  }   
`;

const FillButton = styled(ButtonBase)`

  &:hover {
    background-color: ${COLORS.primaryLight}
  }  
`;

const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.black};

  &:hover {
    background-color: ${COLORS.transparentGray15}
  }

  &:focus {
    outline-offset: revert;
    outline-color: ${COLORS.transparentGray75};
  }
`;

export default Button;
