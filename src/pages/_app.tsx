import type { AppProps } from "next/app";
import { trpc } from "../utils/trpc";

import "../styles/global.css";

import { ModulesContextProvider } from "../contexts/ModulesContext";
import { ProjectsContextProvider } from "../contexts/ProjectsContext";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
import { FeedbackContextProvider } from "../contexts/FeedbackContext";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonical = (
    `https://calculomoveleiro.vercel.app/` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <Seo canonical={canonical} />
      <ProjectsContextProvider>
        <ModulesContextProvider>
          <FeedbackContextProvider>
            <Component {...pageProps} canonical={canonical} />
          </FeedbackContextProvider>
        </ModulesContextProvider>
      </ProjectsContextProvider>
    </>
  );
}

export default trpc.withTRPC(App);
