import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "ConnectKit Next.js demo",
    alchemyId: "FZ-chszarh12L1wVI9gpoX77YholcKgc",
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
      // customTheme={{
      //   // "--ck-connectbutton-background": "#ff0",
      //   "--ck-connectbutton-border-radius": 40,
      // }}
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
