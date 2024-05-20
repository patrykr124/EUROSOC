import FAQ from "@/components/section/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import PopupCheck from "@/components/section/Price/PopupCheck/PopupCheck";
import Slider from "@/components/section/Slider/Slider";
import Tabs from "@/components/section/Tabs/Tabs";
import Certificates from "@/components/section/certificates/Certificates";
import Count from "@/components/section/count/Count";
import Functionality from "@/components/section/functionality/Functionality";
import Chat from "@/components/Chat/Chat";

export default function Home() {
  return (
    <main>
      <Slider />
      <Functionality />
      <Tabs />
      <PopupCheck />
      <Certificates />
      <Count />
      <FAQ />
      <Chat />
    </main>
  );
}
