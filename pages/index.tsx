import Head from "next/head";
import LavaLamp from "../components/LavaLamp/LavaLamp";
import TextCycle from "../components/TextCycle/TextCycle";

export default function Home() {
  const containerStyle = "flex items-center min-w-full flex-col";

  const groovyTraits = [
    "technical leadership",
    "managerial training",
    "web integrations",
    "analytically driven solutions",
    "mentorship",
    "a positive attitude",
  ];
  return (
    <>
      <Head>
        <title>Rodney Morgan</title>
        <meta
          name="description"
          content="Your next leadership training candidate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex flex-col items-center min-w-full"}>
        {/* Title container */}
        <div className={`${containerStyle}  p-10 bg-theme-sandy-brown`}>
          {/* */}
          <div className="flex flex-col">
            <p className={`text-6xl md:text-8xl my-10 text-white`}>
              Rodney Morgan
            </p>
            <div className="flex flex-col break-normal">
              <p className={`text-6xl text-white`}>
                The <b className={`text-theme-burnt-sienna`}>grooviest</b>{" "}
                choice for
              </p>
              <div className={"flex text-theme-persian-green text-6xl"}>
                <TextCycle cycleText={groovyTraits} />
              </div>
            </div>
          </div>
          <div className={"flex"}>
            <LavaLamp />
          </div>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-maize-crayola`}
        >
          <p></p>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-burnt-sienna`}
        >
          <p></p>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-rifle-green`}
        >
          <p></p>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-persian-green`}
        >
          <p></p>
        </div>
      </main>
    </>
  );
}
