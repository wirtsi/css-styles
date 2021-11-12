import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const backdrop = style({
  color: vars.color.text,
  backgroundColor: vars.color.background,
  height: "100vh",
  width: "100vw",
});
