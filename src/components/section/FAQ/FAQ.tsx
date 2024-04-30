import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FQALayout from "./FQALayout";

function FAQ() {
  return (
    <div id="faq">
      <div className="title flex justify-center py-10">
        <h2>FAQ</h2>
      </div>
      <MaxWidthWrapper>
        <FQALayout
          title="Czym jest Cybers One?"
          desc="Cybers One to kompleksowy pakiet usług bezpieczeństwa informatycznego, który obejmuje różnorodne rozwiązania zapewniające ochronę przed zagrożeniami cyfrowymi."
        />
        <FQALayout
          title="Jakie główne usługi oferuje Cybers One?"
          desc="Oferuje ochronę danych osobowych, zarządzanie bezpieczeństwem informacji, obsługę BHP i IT, monitorowanie infrastruktury oraz zaawansowaną ochronę przed cyberzagrożeniami."
        />
        <FQALayout
          title="Dla kogo przeznaczony jest produkt Cybers One?"
          desc="Dla organizacji każdej wielkości, które chcą zabezpieczyć swoje zasoby cyfrowe, zarówno w zakresie danych osobowych, jak i infrastruktury IT,ochrona danych i zarządzanie bezpieczeństwem informacji"
        />
        <FQALayout
          title="Na czym polega Podstawowa Ochrona Danych Osobowych w Cybers One?"
          desc="Usługa ta obejmuje konsultacje i utrzymanie zgodności z przepisami RODO/GDPR, zapewniając, że organizacja prawidłowo zarządza danymi osobowymi."
        />
        <FQALayout
          title="Czym różni się Inspektor Ochrony Danych od Pełnomocnika ds. SZBI?"
          desc="Inspektor Ochrony Danych jest odpowiedzialny za zgodność z RODO, natomiast Pełnomocnik ds. Systemu Zarządzania Bezpieczeństwem Informacji zajmuje się szerzej pojętym bezpieczeństwem informacji w organizacji."
        />
        <FQALayout
          title="Jakie zadania wykonuje Pełnomocnik ds. SZBI Premium?"
          desc="Oprócz standardowych zadań Pełnomocnika ds. SZBI, wersja Premium oferuje dodatkowo szkolenia oraz coroczne audity bezpieczeństwa. Monitorowanie infrastruktury IT"
        />
        <FQALayout
          title="Na czym polega usługa CyberMonitor?"
          desc="CyberMonitor to ciągłe monitorowanie infrastruktury IT w celu wykrycia nieprawidłowości i potencjalnych zagrożeń."
        />
        <FQALayout
          title="Jakie korzyści niesie za sobą regularne monitorowanie infrastruktury IT?"
          desc="Zapewnia wczesne wykrywanie problemów, minimalizuje przestoje i poprawia ogólną wydajność systemów informatycznych."
        />
        <FQALayout
          title="Czym jest CyberCritProtect?"
          desc="To seria usług zapewniających ochronę przed ransomware poprzez odmiejscowienie i zabezpieczenie kopii zapasowych w różnych formatach."
        />
        <FQALayout
          title="Jakie są różnice między wariantami CyberCritProtect Mini, Standard i Premium?"
          desc="Różnią się one technologią przechowywania danych (dyski vs. taśmy vs. biblioteki taśmowe) oraz poziomem redundancji i zabezpieczeń."
        />
        <FQALayout
          title="Co obejmują cykliczne testy penetracyjne infrastruktury w ramach CyberInPentest?"
          desc="Obejmują one rekonesans, testy penetracyjne zasobów IT oraz raportowanie z identyfikacją i zaleceniami dotyczącymi naprawy znalezionych podatności."
        />
        <FQALayout
          title="Dlaczego regularne testy penetracyjne są ważne dla bezpieczeństwa organizacji?"
          desc="Pozwalają one na identyfikację i naprawę podatności zanim zostaną wykorzystane przez atakujących, zwiększając bezpieczeństwo i odporność organizacji na cyberataki."
        />
        <FQALayout
          title="Na czym polegają cykliczne testy phishingowe oferowane przez CyberPhish?"
          desc="Są to kwartalne symulacje ataków phishingowych na pracowników, mające na celu podnoszenie ich świadomości i odporności na wyłudzenia informacji."
        />
        <FQALayout
          title="Jakie są korzyści z przeprowadzania regularnych testów phishingowych wśród pracowników?"
          desc="Umożliwiają one identyfikację luk w wiedzy i przygotowaniu pracowników do obrony przed realnymi atakami, zmniejszając ryzyko sukcesu takich ataków."
        />
        <FQALayout
          title="Jak Cybers One integruje się z istniejącą infrastrukturą IT firmy?"
          desc="Cybers One oferuje skalowalne rozwiązania, które mogą być dostosowane do istniejącej infrastruktury i specyficznych potrzeb klienta, współpracując z obecnymi systemami i protokołami bezpieczeństwa."
        />
        <FQALayout
          title="Czy Cybers One oferuje wsparcie techniczne?"
          desc="Tak, Cybers One zapewnia pełne wsparcie techniczne oraz doradztwo w zakresie implementacji i utrzymania oferowanych rozwiązań bezpieczeństwa."
        />
        <FQALayout
          title="Czy Cybers One oferuje wsparcie techniczne?"
          desc="Tak, Cybers One zapewnia pełne wsparcie techniczne oraz doradztwo w zakresie implementacji i utrzymania oferowanych rozwiązań bezpieczeństwa."
        />
        <FQALayout
          title="Jakie standardy bezpieczeństwa są stosowane w ramach usług Cybers One?"
          desc="Usługi są zgodne z międzynarodowymi i lokalnymi standardami, takimi jak ISO/IEC 27001, OWASP dla aplikacji webowych oraz Common Vulnerability Scoring System dla oceny podatności."
        />
        <FQALayout
          title="Czy istnieje możliwość personalizacji usług w pakiecie Cybers One?"
          desc="Tak, oferujemy możliwość dostosowania każdej usługi do specyficznych wymagań i oczekiwań klienta, co pozwala na optymalne zabezpieczenie zasobów cyfrowych."
        />
        <FQALayout
          title="Czy Cybers One oferuje wsparcie techniczne?"
          desc="Tak, Cybers One zapewnia pełne wsparcie techniczne oraz doradztwo w zakresie implementacji i utrzymania oferowanych rozwiązań bezpieczeństwa."
        />
      </MaxWidthWrapper>
    </div>
  );
}

export default FAQ;
