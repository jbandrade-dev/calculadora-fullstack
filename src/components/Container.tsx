
import { ContainerProps } from "./constType";
import { Footer } from "./Footer";

import { Navbar } from "./Navbar";

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer/>
    </section>
  );
}