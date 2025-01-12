import Audit from "./audit/Audit";
import FeatureList from "./features/FeatureList";
import FooterNew from "./footer/FooterNew";
import HeaderNew from "./header/HeaderNew";
import Navbar from "./Navbar";
import PartnersNew from "./partners/PartnersNew";
import TestimonialNew from "./testimonials/TestimonialNew";
import { Works } from "./works/WorksMain";

export default function LandingMain() {
  return (
    <>
      <Navbar />
      <HeaderNew />
      <FeatureList />
      <Works />
      {/* <Socials /> */}
      <PartnersNew />
      <TestimonialNew />
      <Audit />
      <FooterNew />
    </>
  );
}
