import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ShieldCheck } from "lucide-react";
import React from "react";

import FunctionalityGridTop from "./FunctionalityGridTop";
import FunctionalityGridBottom from "./FunctionalityGridBottom";

function Functionality() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="top py-20">
          <div className="title flex justify-center">
            <h2>Główne funcjonalności Cybers One </h2>
          </div>
        </div>
        <div className="middle grid grid-cols-4 grid-rows-3">
          <FunctionalityGridTop title="Monitoring w czasie rzeczywistym z dokładnością do 1s" />
          <FunctionalityGridTop title="Obniżenie ryzyk związanych z bezpieczeństwem, " />
          <FunctionalityGridTop title="Obniżenie ryzyk związanych z karami finansowymi" />
          <FunctionalityGridTop title="Raporty o użytkownikach (bezpieczeństwo, aktywność)" />
          <FunctionalityGridTop title="Zaawansowana korelacja zdarzeń z różnych źródeł" />
          <FunctionalityGridTop title="Ochrona przed zjawiskiem Shadow IT (nieautoryzowane oprogramowanie)" />
          <FunctionalityGridTop title="Codzienne skanowanie całej infrastruktury w poszukiwaniu nowych podatności" />
          <FunctionalityGridTop title="Automatyzacja dystrybucji i aktualizacji oprogramowania" />
          <FunctionalityGridBottom title="Zaawanswowana ochrona użądzeń mobilnych" />
          <FunctionalityGridBottom title="Behawioralna analiza głównych wektorów ataku"/>
          <FunctionalityGridBottom title="Ochrona antywirusowa już na styku z siecią internet"/>
          <FunctionalityGridBottom title="Cykliczne audyty bezpieczeństwa"/>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Functionality;
