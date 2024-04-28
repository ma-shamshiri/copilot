import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import i18n from "../i18n";
import theme from "./theme";
import router from "./routing/routes";
// import "./global.css";
// import "./normalize.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {/* <App /> */}
        <RouterProvider router={router} />
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>
);
