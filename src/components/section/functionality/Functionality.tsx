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
          <FunctionalityGridTop
            title="Monitoring"
            desc="w czasie rzeczywistym z dokładnością do 1s"
          />
          <FunctionalityGridTop
            title="Obniżenie"
            desc="ryzyk związanych z bezpieczeństwem"
          />
          <FunctionalityGridTop
            title="Obniżenie"
            desc="ryzyk związanych z karami finansowymi"
          />
          <FunctionalityGridTop
            title="Raporty"
            desc="o użytkownikach (bezpieczeństwo, aktywność)"
          />
          <FunctionalityGridTop
            title="Zaawansowana"
            desc="korelacja zdarzeń z różnych źródeł"
          />
          <FunctionalityGridTop
            title="Ochrona"
            desc="przed zjawiskiem Shadow IT (nieautoryzowane oprogramowanie)"
          />
          <FunctionalityGridTop
            title="Codzienne"
            desc="skanowanie całej infrastruktury w poszukiwaniu nowych podatności"
          />
          <FunctionalityGridTop
            title="Automatyzacja"
            desc="dystrybucji i aktualizacji oprogramowania"
          />
          <FunctionalityGridBottom
            title="Zaawanswowana"
            desc="ochrona użądzeń mobilnych"
          />
          <FunctionalityGridBottom
            title="Behawioralna"
            desc="analiza głównych wektorów ataku"
          />
          <FunctionalityGridBottom
            title="Ochrona"
            desc="antywirusowa już na styku z siecią internet"
          />
          <FunctionalityGridBottom
            title="Cykliczne"
            desc="audyty bezpieczeństwa"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Functionality;
