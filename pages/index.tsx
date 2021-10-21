import { useState } from "react";
import Counter from "../components/Counter";
import Icon from "../components/Icon";
import Head from "next/head";
import classnames from "classnames";
import { FlatBox } from "../components/FlatBox";
import { Radio } from "../components/Radio";
import { btn } from "../components/Counter.module.scss";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
    <div className={`${theme === "dark" ? "theme-dark" : "theme-default"}`}>
      <div className="backdrop">
        <Head>
          <title>SCSS Modules with crazy theme switching</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://shop-common-cdn-prod.mediazs.com/shop-icon-fonts/v5/css/shop-icon-fonts.css"
          />
        </Head>
        <header>
          <FlatBox variant="grey">
            <form>
              <Radio
                id="light"
                checked={theme === "light"}
                onChange={(evt) => changeTheme(evt.target.id)}
              >
                Light
              </Radio>
              <Radio
                id="dark"
                checked={theme == "dark"}
                onChange={(evt) => changeTheme(evt.target.id)}
              >
                Dark
              </Radio>
            </form>
            <div className="logo"></div>
          </FlatBox>
        </header>

        <main style={{ margin: 16 }}>
          <Counter
            minusAriaLabel="Minus"
            plusAriaLabel="Plus"
            inputAriaLabel="Input"
            onKeyUp={() => console.log("Changed")}
            onQuantityModified={() => console.log("bar")}
          />
        </main>

        <footer>
          {/* This variable should only get the global scope */}
          This is to demonstrate scoping of css variables&nbsp;
          <Icon
            className={classnames("v5-icon--eye-mid", btn)}
            style={{ fontSize: 24 }}
            // className={classnames("v5-icon--eye-mid")}
            // style={{ fontSize: 24, color: "var(--buttonColor)" }}
          ></Icon>
        </footer>
      </div>
    </div>
  );
}
