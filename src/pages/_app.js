import "@/styles/globals.scss";
import { Red_Hat_Display } from "next/font/google";
import { ThemeProvider } from "../contexts/theme-context";

const font = Red_Hat_Display({subsets: ["latin"]});

export default function App({Component, pageProps}) {
  
  return <>
    <ThemeProvider>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </>
}
