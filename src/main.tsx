import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRouters from "./MyRouters.tsx";
import AppProvider from "./providers/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <MyRouters />
    </AppProvider>
  </React.StrictMode>,
);
