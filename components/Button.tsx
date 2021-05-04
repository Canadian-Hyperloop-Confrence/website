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
        color: ${props.theme.palette.chcRed};
        background-color: ${props.theme.palette.chcWhite};
        border-color: ${props.theme.palette.chcWhite};
        padding: 0;
        `;
      case "Primary":
      default:
        return css`
        color: ${props.theme.palette.chcWhite};
        background-color: ${props.theme.palette.chcRed};
        border-color: ${props.theme.palette.chcRed};
        padding-left: 16px;
        padding-right: 16px;
        `;
    }
  }}

  cursor: pointer;
  font: ${({ theme }) => theme.typography.body.semiBold};
  border-radius: 4px;
  border-style: solid;
  width: fit-content;
  margin: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
`;


export default Button;
