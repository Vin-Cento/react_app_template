import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import AppThemeProvider from "./AppThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AppThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
