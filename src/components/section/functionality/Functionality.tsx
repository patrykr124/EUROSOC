import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  AppWindow,
  Brain,
  BringToFront,
  ClipboardPlus,
  FolderInput,
  GlobeLock,
  HandCoins,
  RefreshCcw,
  Rss,
  ScanEye,
  ShieldCheck,
  ShieldPlus,
  TabletSmartphone,
} from "lucide-react";
import React from "react";
import FunctionalityGridTop from "./FunctionalityGridTop";
import FunctionalityGridBottom from "./FunctionalityGridBottom";

function Functionality() {
  return (
    <div>
      <MaxWidthWrapper>
        <div id="functional" className="top py-12 md:py-24">
          <div className="title flex flex-col justify-center items-center ">
            <h2 className="md:block flex flex-col items-center justify-center text-center">
              Podstawowe funkcjonalności{" "}
              <span className="text-primary">Cybers One </span>
            </h2>
            <p className="text-center text-muted-foreground max-w-4xl ">
              integruje zaawansowane funkcje bezpieczeństwa, w tym monitoring w
              czasie rzeczywistym, ochronę urządzeń mobilnych i cykliczne
              audyty, zwiększając odporność organizacji na zagrożenia.
            </p>
          </div>
        </div>
        <div className="middle grid md:grid-cols-3 xl:grid-cols-4 grid-rows-3 md:pb-24 grid-cols-2 ">
          <FunctionalityGridTop
            icon={<ScanEye />}
            title="Monitoring"
            desc="w czasie rzeczywistym"
            desc2="z dokładnością do 1s"
          />
          <FunctionalityGridTop
            icon={<ShieldCheck />}
            title="Obniżenie"
            desc="ryzyk związanych"
            desc2="z bezpieczeństwem"
          />
          <FunctionalityGridTop
            icon={<HandCoins />}
            title="Obniżenie"
            desc="ryzyk związanych z karami finansowymi"
            desc2=""
          />
          <FunctionalityGridTop
            icon={<ClipboardPlus />}
            title="Raporty"
            desc="o użytkownikach (bezpieczeństwo, aktywność)"
            desc2=""
            className="border-r-0"
          />
          <FunctionalityGridTop
            icon={<BringToFront />}
            title="Zaawansowana"
            desc="korelacja zdarzeń z różnych źródeł"
            desc2=""
          />
          <FunctionalityGridTop
            icon={<GlobeLock />}
            title="Ochrona"
            desc="przed zjawiskiem Shadow IT (nieautoryzowane oprogramowanie)"
            desc2=""
          />
          <FunctionalityGridTop
            icon={<RefreshCcw />}
            title="Codzienne"
            desc="skanowanie całej infrastruktury"
            desc2="w poszukiwaniu nowych podatności"
          />
          <FunctionalityGridTop
            icon={<Brain />}
            title="Automatyzacja"
            desc="dystrybucji i aktualizacji oprogramowania"
            className="border-r-0"
            desc2=""
          />
          <FunctionalityGridBottom
            icon={<TabletSmartphone />}
            title="Zaawanswowana"
            desc="ochrona użądzeń mobilnych"
          />
          <FunctionalityGridBottom
            icon={<FolderInput />}
            title="Behawioralna"
            desc="analiza głównych wektorów ataku"
          />
          <FunctionalityGridBottom
            icon={<Rss />}
            title="Ochrona"
            desc="antywirusowa już na styku z siecią internet"
          />
          <FunctionalityGridBottom
            icon={<ShieldPlus />}
            title="Cykliczne"
            desc="audyty bezpieczeństwa"
            className="border-r-0"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Functionality;
