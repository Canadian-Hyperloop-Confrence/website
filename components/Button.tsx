import styled, { css } from 'styled-components';

type Variants =
  "Primary" |
  "Secondary"

interface Props {
  variant?: Variants
}

const Button = styled.button<Props>`
  ${props => {
    switch(props.variant) {
      case "Secondary":
        return css`
        color: ${props.theme.palette.redA};
        background-color: ${props.theme.palette.whiteA};
        border-color: ${props.theme.palette.redA};
        padding-left: 16px;
        padding-right: 16px;
        `;
      case "Primary":
      default:
        return css`
        color: ${props.theme.palette.whiteA};
        background-color: ${props.theme.palette.redA};
        border-color: ${props.theme.palette.redA};
        padding-left: 16px;
        padding-right: 16px;
        `;
    }
  }}

  cursor: pointer;
  font: 400 16px Questrial;
  border-radius: 4px;
  border-style: solid;
  width: fit-content;
  margin: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
`;


export default Button;
