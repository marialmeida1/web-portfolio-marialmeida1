// Components
import Navbar from "./components/commons/Navbar";
import About from "./components/home/About";
import Banner from "./components/home/Banner";
import IconsLine from "./components/home/IconsLine";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <IconsLine />
    </div>
  );
}
