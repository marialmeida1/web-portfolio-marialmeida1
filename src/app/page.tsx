// Components
import Navbar from "../components/commons/Navbar";
import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Contact from "../components/home/Contact";
import IconsLine from "../components/home/IconsLine";
import Networks from "../components/home/Networks";
import Projects from "../components/home/Projects";
import Publications from "../components/home/Publications";

export default async function Home() {

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <IconsLine />
      <Projects />
      <Publications />
      <Contact />
      <Networks/>
    </>
  );
}
