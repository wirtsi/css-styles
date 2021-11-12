import {
  createThemeContract,
  createTheme
} from '@vanilla-extract/css';
import homer1 from "../public/homer1.png"
import homer2 from "../public/homer2.png"


export const vars = createThemeContract({
  color: {
    button: null as string,
    text: null as string,
    background: null as string
  },
  logo: null as string,
});

export const lite = createTheme(vars, {
  color: {
    button: "#000000",
    text: "#112233",
    background: "#ffffff"
  },
  logo: `url(${homer1.src})`
});

export const dark = createTheme(vars, {
  color: {
    button: "#ffffff",
    text: "#445522",
    background: "#000000"
  },
  logo: `url(${homer2.src})`
});
