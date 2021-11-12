import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const className = style({
  backgroundImage: vars.logo,
  position: "absolute",
  height: "32px",
  width: "32px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  right: "16px",
  top: "4px"
})
