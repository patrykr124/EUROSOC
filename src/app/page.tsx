import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/section/Footer/Footer";
import PopupCheck from "@/components/section/Price/PopupCheck/PopupCheck";
import Slider from "@/components/section/Slider/Slider";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Slider />
      <PopupCheck />
      <Footer />
    </main>
  );
}
