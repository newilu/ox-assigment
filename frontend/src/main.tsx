import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { QueryClientContext } from "./context/query-client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientContext>
      <AuthProvider>
        <React.Suspense fallback={<div />}>
          <App />
        </React.Suspense>
      </AuthProvider>
    </QueryClientContext>
  </React.StrictMode>,
);
