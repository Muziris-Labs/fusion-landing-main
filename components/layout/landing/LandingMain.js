import Audit from "./audit/Audit";
import FeatureList from "./features/FeatureList";
import FooterNew from "./footer/FooterNew";
import HeaderNew from "./header/HeaderNew";
import Navbar from "./Navbar";
import PartnersNew from "./partners/PartnersNew";
import Socials from "./social/Socials";
import TestimonialNew from "./testimonials/TestimonialNew";

export default function LandingMain() {
  return (
    <>
      <Navbar />
      <HeaderNew />
      <FeatureList />
      <Socials />
      <PartnersNew />
      <TestimonialNew />
      <Audit />
      <FooterNew />
    </>
  );
}
