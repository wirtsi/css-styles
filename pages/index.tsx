import Counter from "../components/Counter";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plain CSS from old Styleguide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://shop-common-cdn-prod.mediazs.com/shop-styleguide/v3/css/utils.css"
        />
        <link
          rel="stylesheet"
          href="https://shop-common-cdn-prod.mediazs.com/shop-icon-fonts/v5/css/shop-icon-fonts.css"
        />
        <link
          rel="stylesheet"
          href="https://shop-common-cdn-prod.mediazs.com/shop-styleguide/v3/css/zooplus-theme.css"
        />
      </Head>

      <main style={{margin: 16}}>
        <Counter
          minusAriaLabel="Minus"
          plusAriaLabel="Plus"
          inputAriaLabel="Input"
          onKeyUp={(evt) => console.log(evt)}
          onQuantityModified={() => console.log("bar")}
        />
      </main>

      <footer></footer>
    </div>
  );
}
