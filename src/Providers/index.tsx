import { CartProvider } from "./Cart";
import { ReactNode } from "react";

interface CartProps {
  children: ReactNode;
}

export const Providers = ({ children }: CartProps) => (
  <CartProvider>{children}</CartProvider>
);
