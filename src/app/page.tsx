import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/section/Footer/Footer";
import Price from "@/components/section/Price/Price";
import Slider from "@/components/section/Slider/Slider";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Slider />
      <Price />
      <Footer />
    </main>
  );
}
