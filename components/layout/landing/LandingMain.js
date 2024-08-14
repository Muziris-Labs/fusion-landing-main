import Header from "./header/Header";
import Footer from "./footer/Footer";
import Partners from "./partners/Partners";
import Testimonials from "./testimonials/Testimonials";
import Bento from "./bento/Bento";
import OnChain from "./onChain/OnChain";

export default function LandingMain() {
  return (
    <>
      <Header />
      <Partners />
      <Bento />
      <Testimonials />
      <OnChain />
      <Footer />
    </>
  );
}
