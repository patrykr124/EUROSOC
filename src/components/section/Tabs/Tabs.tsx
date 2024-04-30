"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import "./tabs.css";
import ContentTabs from "./ContentTabs";

function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleActibeTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div id="jak" className="tabs py-10 ">
      <MaxWidthWrapper>
        <div className="box flex border-2 rounded-2xl p-4">
          <ContentTabs
            className={activeTab === 1 ? "active-content " : "content"}
            title="CyberOut"
            desc="CyberOut to kluczowy element oferty Cybers One, specjalizujący się w zaawansowanych outsourcingowych usługach z zakresu bezpieczeństwa organizacji. Nasza oferta opiera się na dostępie do wysoko wykwalifikowanych ekspertów bez konieczności ich stałego zatrudnienia, co przekłada się na elastyczność i optymalizację kosztów dla Twojej firmy.

            Korzyści z korzystania z CyberOut:
            
                Optymalizacja Kosztów: Znaczne obniżenie wydatków na zatrudnienie i szkolenie specjalistów IT i BHP, zmieniając stałe koszty w zmienne.
                Elastyczność i Skalowalność: Usługi dostosowane do bieżących potrzeb firmy, szybko skalowalne w odpowiedzi na rozwój organizacji czy nowe zagrożenia.
                Dostęp do Ekspertów: Bezpośredni dostęp do wiedzy i doświadczenia naszych specjalistów, którzy są na bieżąco z najnowszymi trendami i regulacjami.
                Zgodność z Przepisami: Gwarancja zgodności z aktualnymi wymaganiami prawnymi, kluczowa dla unikania kar i utrzymania dobrego wizerunku firmy.
                Całodobowe Wsparcie: Obsługa pierwszej i drugiej linii wsparcia dostępna 24/7, co gwarantuje szybkie identyfikowanie i rozwiązywanie incydentów.
            
            Typy Wsparcia Oferowane przez CyberOut:
            
                Podstawowa i zaawansowana ochrona danych osobowych,
                Inspekcja i pełnomocnictwo ds. systemu zarządzania bezpieczeństwem informacji,
                Obsługa BHP / PPOŻ na różnych poziomach,
                Obsługa IT — I i II linia wsparcia technicznego.
            
            Wybierając CyberOut, inwestujesz w stabilność i bezpieczeństwo Twojej organizacji, pozwalając na skupienie się na podstawowej działalności biznesowej."
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={300}
            imgHeight={300}
          />
          <ContentTabs
            className={activeTab === 2 ? "active-content " : "content"}
            title="CyberMonitor"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 3 ? "active-content " : "content"}
            title="CyberLog"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 4 ? "active-content " : "content"}
            title="CyberLeakProtect"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 5 ? "active-content " : "content"}
            title="CyberSOC"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 6 ? "active-content " : "content"}
            title="CyberAut"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 7 ? "active-content " : "content"}
            title="CyberMobileProtect"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 8 ? "active-content " : "content"}
            title="CyberMailProtect"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 9 ? "active-content " : "content"}
            title="CyberNetProtect"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 10 ? "active-content " : "content"}
            title="CyberCritProtect Mini"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 11 ? "active-content " : "content"}
            title="CyberCritProtect Standard"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 12 ? "active-content " : "content"}
            title="CyberCritProtect Premium"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 13 ? "active-content " : "content"}
            title="CyberWebVul"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 14 ? "active-content " : "content"}
            title="CyberInVul"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 15 ? "active-content " : "content"}
            title="CyberPhish"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 16 ? "active-content " : "content"}
            title="CyberinPentest"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />
          <ContentTabs
            className={activeTab === 17 ? "active-content " : "content"}
            title="CyberAppPentest"
            desc="1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nisl non aliquam lobortis, metus purus pretium est, ac ultricies nulla nunc nec metus"
            imgSrc="/assets/images/1.png"
            imgAlt="CyberOut"
            imgWidth={500}
            imgHeight={500}
          />

          <div className="right-tab flex flex-col justify-center gap-2 shadow-xl  rounded-xl max-h-96 scrollable-tabs">
            <div className="tab">
              <Button onClick={() => handleActibeTab(1)}>CyberOut</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(2)}>CyberMonitor</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(3)}>CyberLog</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(4)}>
                CyberLeakProtect
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(5)}>CyberSOC</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(6)}>CyberAut</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(7)}>
                CyberMobileProtect
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(8)}>
                CyberMailProtect
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(9)}>
                CyberNetProtect
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(10)}>
                CyberCritProtect Mini
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(11)}>
                CyberCritProtect Standard
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(12)}>
                CyberCritProtect Premium
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(13)}>CyberWebVul</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(14)}>CyberInVul</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(15)}>CyberPhish</Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(16)}>
                CyberinPentest
              </Button>
            </div>
            <div className="tab">
              <Button onClick={() => handleActibeTab(17)}>
                CyberAppPentest
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Tabs;
