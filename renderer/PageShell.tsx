import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { Link } from "./Link";
import { MantineProvider } from "@mantine/core";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colors: { primary: ["#ea6f66"] } }}
      >
        <PageContextProvider pageContext={pageContext}>
          <Layout>{children}</Layout>
        </PageContextProvider>
      </MantineProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: '#F7F7F7',
      }}
    >
      {children}
    </div>
  );
}
