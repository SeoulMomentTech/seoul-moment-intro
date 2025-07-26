import BrandCover from "./components/BrandCover";
import CompanyIntro from "./components/CompanyIntro";
import ContactUS from "./components/ContactUS";
import HeroSlogan from "./components/HeroSlogan";
import Information from "./components/Information";
import Landing from "./components/Landing";
import SectionsWrapper from "./components/SectionsWrapper";

export default function Home() {
  return (
    <div className="relative">
      <SectionsWrapper>
        <Landing />
        <HeroSlogan className="h-[calc(100vh-72px)] bg-white" />
        <CompanyIntro />
        <BrandCover />
        <Information />
        <ContactUS />
      </SectionsWrapper>
    </div>
  );
}
