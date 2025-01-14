"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
type queryProviderProps = {
  children: React.ReactNode;
};
const UseQueryProvider = ({ children }: queryProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default UseQueryProvider;
