import "@styles/globals.scss";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SidebarProvider from "@/context/sidebar.context";
import { queryClient } from "@lib/query-client.lib";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <SidebarProvider>
          <Component {...pageProps} />
          <ToastContainer
            autoClose={3000}
            position="top-right"
            theme="colored"
            hideProgressBar
            closeOnClick
            pauseOnHover
          />
        </SidebarProvider>
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
