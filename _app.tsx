import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";

import Seo from "./src/components/Seo";
import { ModulesContextProvider } from "./src/contexts/ModulesContext";
import { ProjectsContextProvider } from "./src/contexts/ProjectsContext";


export default function App({ Component, pageProps }: AppProps) {
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
          <Component {...pageProps} canonical={canonical} />
        </ModulesContextProvider>
      </ProjectsContextProvider>
    </>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }
