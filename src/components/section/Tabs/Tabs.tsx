"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import "./tabs.css";
import ContentTabs from "./ContentTabs";
import {
  CyberAutomateData,
  CyberLeakProtectData,
  CyberLogData,
  CyberMobileProtectData,
  CyberMonitorData,
  CyberOutData,
  CyberSocProtectData,
  CybersAppPentestData,
  CybersCritProtectMiniData,
  CybersCritProtectPremiumData,
  CybersCritProtectStandardData,
  CybersInfraPentestData,
  CybersInfraVulData,
  CybersMailProtectData,
  CybersNetProtectData,
  CybersPhishData,
  CybersWebVulData,
} from "./Data";
import { SearchIcon } from "lucide-react";

function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div
      id="jak"
      className="tabs pb-24 border-t-2 z-10 relative  "
      // style={{
      //   background: "url('/assets/images/backgroundtop.png')",
      //   backgroundPosition: "bottom",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div
        className="gradient absolute h-full w-full -z-10 overflow-hidden "
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.3113446062018558) 0%, rgba(0,0,0,0.12086841572566531) 100%)",
        }}
      ></div>
      <MaxWidthWrapper className="overflow-hidden">
        <div className="title flex flex-col items-center justify-center py-12 md:py-24 ">
          <h2 className="md:block items-center justify-center text-center">
            Poznaj pełną
            <span className="text-primary"> moc ochrony</span>
          </h2>
          <p className="text-center max-w-4xl text-muted-foreground ">
            Odkryj zaawansowane technologie stojące za naszą ochroną
          </p>
        </div>
        <div className="box min-h-[700px]  rounded-2xl  flex xl:flex-row flex-col  p-4 gap-12 justify-center items-center">
          <div className="left flex flex-col gap-4 mx-auto">
            <div className="searchBar bg-white border-2 h-9 items-center rounded-xl flex flex-row ">
              <SearchIcon size={18} className="m-1.5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="outline-none"
              />
            </div>
            <div className="left-tab bg-white z-10 p-2 flex flex-row xl:flex-col  justify-center gap-2  scrollable-tabs flex-wrap xl:flex-nowrap border-2 rounded-xl ">
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 1 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(1)}
                >
                  Cybers Out
                </Button>
              </div>
              <div className="tab ">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 2 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(2)}
                >
                  Cybers Monitor
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 3 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(3)}
                >
                  Cybers Log
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 4 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(4)}
                >
                  Cybers LeakProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 5 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(5)}
                >
                  Cybers SOC
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 6 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(6)}
                >
                  Cybers Automate
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 7 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(7)}
                >
                  Cybers MobileProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 8 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(8)}
                >
                  Cybers MailProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 9 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(9)}
                >
                  Cybers NetProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 10
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(10)}
                >
                  Cybers CritProtect Mini
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 11
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(11)}
                >
                  Cybers CritProtect Standard
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 12
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(12)}
                >
                  Cybers CritProtect Premium
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 13
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(13)}
                >
                  Cybers WebVul
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 14
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(14)}
                >
                  Cybers InfraVul
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 15
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(15)}
                >
                  Cybers Phish
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 16
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(16)}
                >
                  Cybers InfraPentest
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 17
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(17)}
                >
                  Cybers AppPentest
                </Button>
              </div>
            </div>
          </div>

          <div className="right h-[700px] flex flex-1 ">
            <ContentTabs
              className={activeTab === 1 ? "active-content " : "content"}
              title="Cybers Out"
              desc="Jedna z kluczowych składowych produktu Cybers One, oferująca zaawansowane usługi outsourcingowe związane z bezpieczeństwem organizacji. Zasoby ludzkie odgrywają kluczową rolę w zapewnianiu bezpieczeństwa i są fundamentem naszej oferty, która obejmuje zarówno podstawową ochronę danych osobowych, jak i zaawansowane zarządzanie systemami bezpieczeństwa informacji."
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 2 ? "active-content " : "content"}
              title="Cybers Monitor"
              desc="Zaawansowana usługa oferowana przez Cybers One, zaprojektowana, aby zapewnić ciągłe monitorowanie infrastruktury IT Twojej organizacji. Usługa ta jest kluczowym narzędziem dla każdej nowoczesnej firmy, która chce utrzymać swoje systemy informatyczne w optymalnym stanie oraz zapewnić wysoki poziom bezpieczeństwa danych."
              data={CyberMonitorData}
            />
            <ContentTabs
              className={activeTab === 3 ? "active-content " : "content"}
              title="Cybers Log"
              desc="Usługa zaprojektowana, aby zapewnić organizacjom niezbędne narzędzia do spełnienia wymogów prawnych i operacyjnych związanych z przechowywaniem logów systemowych i aplikacji. Utrzymywanie kopii zapasowych danych logów w odmiejscowionej lokalizacji przez co najmniej dwa lata jest kluczowe dla zapewnienia ciągłości biznesowej, zgodności z przepisami oraz możliwości analizy historycznej w przypadku wystąpienia problemów bezpieczeństwa czy awarii systemu."
              data={CyberLogData}
            />
            <ContentTabs
              className={activeTab === 4 ? "active-content " : "content"}
              title="Cybers LeakProtect"
              desc="Kompleksowa usługa zaprojektowana, aby chronić wartości intelektualne firmy oraz dane osobowe przed nieautoryzowanym dostępem i wyciekami, zarówno tych spowodowanych przez zewnętrzne ataki cybernetyczne, jak i działania własnych pracowników."
              data={CyberLeakProtectData}
            />
            <ContentTabs
              className={activeTab === 5 ? "active-content " : "content"}
              title="Cybers SOC"
              desc="Zaawansowana usługa bezpieczeństwa, która integruje reakcję na incydenty z korelacją zdarzeń pochodzących z różnych źródeł w infrastrukturze IT."
              data={CyberSocProtectData}
            />
            <ContentTabs
              className={activeTab === 6 ? "active-content " : "content"}
              title="Cybers Automate"
              desc="Innowacyjna usługa, która zapewnia kompleksową ochronę przed tzw. Shadow IT — nieautoryzowanym oprogramowaniem i urządzeniami w sieci firmowej — oraz automatyzuje proces aktualizacji oprogramowania, co znacząco podnosi poziom bezpieczeństwa IT oraz efektywność zarządzania systemami informatycznymi w organizacji."
              data={CyberAutomateData}
            />
            <ContentTabs
              className={activeTab === 7 ? "active-content " : "content"}
              title="Cybers MobileProtect"
              desc="Zaawansowana usługa zabezpieczająca urządzenia mobilne pracowników, która integruje rozwiązania z oprogramowania Baramundi. Usługa ta jest zaprojektowana, aby chronić zarówno firmowe, jak i prywatne urządzenia używane w celach służbowych przed zagrożeniami cybernetycznymi oraz nieautoryzowanym dostępem do firmowych danych."
              data={CyberMobileProtectData}
            />
            <ContentTabs
              className={activeTab === 8 ? "active-content " : "content"}
              title="Cybers MailProtect"
              desc="Innowacyjna usługa, która zabezpiecza systemy pocztowe organizacji przed nowoczesnymi zagrożeniami cyfrowymi, takimi jak phishing, złośliwe oprogramowanie oraz ataki zero-day. Usługa korzysta z zaawansowanych technik behawioralnych i jest oparta na oprogramowaniu Acronis, które umożliwia skuteczne wykrywanie i neutralizowanie zagrożeń jeszcze przed ich dotarciem do skrzynki pocztowej użytkownika."
              data={CybersMailProtectData}
            />
            <ContentTabs
              className={activeTab === 9 ? "active-content " : "content"}
              title="Cybers NetProtect"
              desc="Zaawansowana usługa zabezpieczająca punkt styku organizacji z siecią internet. Usługa wykorzystuje urządzenia Unified Threat Management (UTM) marki FortiGate, które integrują wiele funkcji bezpieczeństwa w jednym fizycznym urządzeniu, zapewniając kompleksową ochronę przed zagrożeniami zewnętrznymi."
              data={CybersNetProtectData}
            />
            <ContentTabs
              className={activeTab === 10 ? "active-content " : "content"}
              title="Cybers CritProtect Mini"
              desc="Kompleksowa linia usług zapewniająca ochronę przed ransomware poprzez zastosowanie zaawansowanych technologii przechowywania danych. Seria ta składa się z trzech wariantów: Mini, Standard i Premium, każdy oferujący różne poziomy ochrony i redundancji, zgodnie z normą ISO 24762 dotyczącą odzyskiwania po katastrofach i zarządzania ciągłością działania IT."
              data={CybersCritProtectMiniData}
            />
            <ContentTabs
              className={activeTab === 11 ? "active-content " : "content"}
              title="Cybers CritProtect Standard"
              desc="Kompleksowa linia usług zapewniająca ochronę przed ransomware poprzez zastosowanie zaawansowanych technologii przechowywania danych. Seria ta składa się z trzech wariantów: Mini, Standard i Premium, każdy oferujący różne poziomy ochrony i redundancji, zgodnie z normą ISO 24762 dotyczącą odzyskiwania po katastrofach i zarządzania ciągłością działania IT."
              data={CybersCritProtectStandardData}
            />
            <ContentTabs
              className={activeTab === 12 ? "active-content " : "content"}
              title="Cybers CritProtect Premium"
              desc="Kompleksowa linia usług zapewniająca ochronę przed ransomware poprzez zastosowanie zaawansowanych technologii przechowywania danych. Seria ta składa się z trzech wariantów: Mini, Standard i Premium, każdy oferujący różne poziomy ochrony i redundancji, zgodnie z normą ISO 24762 dotyczącą odzyskiwania po katastrofach i zarządzania ciągłością działania IT."
              data={CybersCritProtectPremiumData}
            />
            <ContentTabs
              className={activeTab === 13 ? "active-content " : "content"}
              title="Cybers WebVul"
              desc="Usługa zapewniająca stałe monitorowanie aplikacji webowych w celu identyfikacji i zarządzania nowymi podatnościami. Usługa korzysta z zaawansowanego oprogramowania HOLM Security, które umożliwia codzienne skanowanie aplikacji zgodnie z najnowszymi standardami bezpieczeństwa, w tym OWASP TOP 10, co stanowi o najlepszych praktykach w zakresie zabezpieczeń aplikacji webowych."
              data={CybersWebVulData}
            />
            <ContentTabs
              className={activeTab === 14 ? "active-content " : "content"}
              title="Cybers InfraVul"
              desc="Zaawansowana usługa monitoringu bezpieczeństwa, skoncentrowana na identyfikacji i zarządzaniu podatnościami w sieci wewnętrznej organizacji. Usługa wykorzystuje oprogramowanie HOLM Security do codziennego skanowania różnorodnych elementów infrastruktury IT, od systemów lokalnych, przez urządzenia sieciowe, aż po środowiska chmurowe i Internet rzeczy (IoT)."
              data={CybersInfraVulData}
            />
            <ContentTabs
              className={activeTab === 15 ? "active-content " : "content"}
              title="Cybers Phish"
              desc="Usługa mająca na celu zwiększenie świadomości i odporności pracowników na próby phishingowe, które są jednym z najczęstszych narzędzi stosowanych przez cyberprzestępców do wyłudzania informacji. Usługa ta wykorzystuje oprogramowanie HOLM Security do przeprowadzania kwartalnych symulacji ataków phishingowych, które naśladują najnowsze i najbardziej zaawansowane techniki stosowane przez atakujących."
              data={CybersPhishData}
            />
            <ContentTabs
              className={activeTab === 16 ? "active-content " : "content"}
              title="Cybers InfraPentest"
              desc="Zaawansowana usługa, która polega na corocznym przeprowadzaniu szczegółowych testów penetracyjnych infrastruktury teleinformatycznej organizacji. Testy te mają na celu identyfikację i eksploatację podatności w celu zwiększenia ogólnego poziomu bezpieczeństwa. Proces testów obejmuje rekonesans, enumerację, skanowanie, eksploitację oraz raportowanie, co pozwala na kompleksową ocenę potencjalnych zagrożeń."
              data={CybersInfraPentestData}
            />
            <ContentTabs
              className={activeTab === 17 ? "active-content " : "content"}
              title="Cybers AppPentest"
              desc="Specjalistyczna usługa zapewniająca coroczne testy penetracyjne aplikacji webowej Twojej organizacji. Testy te mają na celu identyfikację i eksploatację potencjalnych podatności w aplikacjach internetowych, co jest kluczowe dla zapewnienia ich bezpieczeństwa i ochrony przed cyberatakami. Proces testowania obejmuje kompleksowy rekonesans, manualne badanie podatności oraz ich eksploitację z finalnym szczegółowym raportowaniem."
              data={CybersAppPentestData}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Tabs;
