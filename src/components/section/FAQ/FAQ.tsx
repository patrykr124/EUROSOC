import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FQALayout from "./FQALayout";

function FAQ() {
  return (
    <div id="faq">
      <div className="title flex flex-col items-center justify-center py-24">
        <h2>
          FA<span className="text-primary">Q</span>
        </h2>
        <p className="text-muted-foreground  max-w-prose text-center">
          Najczęsciej zadawane pytania
        </p>
      </div>
      <MaxWidthWrapper className="flex gap-20 ">
        <div className="flex flex-1 flex-col right gap-8">
          <div className="faq-box">
            <div className="title mb-4">
              <h3 >Ogólne pytania o Cybers One</h3>
            </div>
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
              desc="Dla organizacji każdej wielkości, które chcą zabezpieczyć swoje zasoby cyfrowe, zarówno w zakresie danych osobowych, jak i infrastruktury IT."
            />
          </div>
          <div className="faq-box">
            <div className="title mb-4">
              <h3>Ochrona danych i zarządzanie bezpieczeństwem informacji</h3>
            </div>
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
              desc="Oprócz standardowych zadań Pełnomocnika ds. SZBI, wersja Premium oferuje dodatkowo szkolenia oraz coroczne audity bezpieczeństwa."
            />
          </div>
          <div className="faq-box ">
            <div className="title mb-4">
              <h3>Monitorowanie infrastruktury IT</h3>
            </div>
            <FQALayout
              title="Na czym polega usługa CyberMonitor?"
              desc="CyberMonitor to ciągłe monitorowanie infrastruktury IT w celu wykrycia nieprawidłowości i potencjalnych zagrożeń."
            />
            <FQALayout
              title="Jakie korzyści niesie za sobą regularne monitorowanie infrastruktury IT?"
              desc="Zapewnia wczesne wykrywanie problemów, minimalizuje przestoje i poprawia ogólną wydajność systemów informatycznych."
            />
          </div>
          <div className="faq-box">
            <div className="title mb-4">
              <h3>Ochrona przed ransomware</h3>
            </div>
            <FQALayout
              title="Czym jest CyberCritProtect?"
              desc="To seria usług zapewniających ochronę przed ransomware poprzez odmiejscowienie i zabezpieczenie kopii zapasowych w różnych formatach."
            />
            <FQALayout
              title="Jakie są różnice między wariantami CyberCritProtect Mini, Standard i Premium?"
              desc="Różnią się one technologią przechowywania danych (dyski vs. taśmy vs. biblioteki taśmowe) oraz poziomem redundancji i zabezpieczeń."
            />
          </div>
          <div className="faq-box">
            <div className="title mb-4">
              <h3>Testy penetracyjne i ochrona aplikacji web</h3>
            </div>
            <FQALayout
              title="Co obejmują cykliczne testy penetracyjne infrastruktury w ramach CyberInPentest?"
              desc="Obejmują one rekonesans, testy penetracyjne zasobów IT oraz raportowanie z identyfikacją i zaleceniami dotyczącymi naprawy znalezionych podatności."
            />
            <FQALayout
              title="Dlaczego regularne testy penetracyjne są ważne dla bezpieczeństwa organizacji?"
              desc="Pozwalają one na identyfikację i naprawę podatności zanim zostaną wykorzystane przez atakujących, zwiększając bezpieczeństwo i odporność organizacji na cyberataki."
            />
          </div>
          <div className="faq-box">
            <div className="title mb-4">
              <h3>Edukacja i świadomość bezpieczeństwa</h3>
            </div>
            <FQALayout
              title="Na czym polegają cykliczne testy phishingowe oferowane przez CyberPhish?"
              desc="Są to kwartalne symulacje ataków phishingowych na pracowników, mające na celu podnoszenie ich świadomości i odporności na wyłudzenia informacji."
            />
            <FQALayout
              title="Jakie są korzyści z przeprowadzania regularnych testów phishingowych wśród pracowników?"
              desc="Umożliwiają one identyfikację luk w wiedzy i przygotowaniu pracowników do obrony przed realnymi atakami, zmniejszając ryzyko sukcesu takich ataków."
            />
          </div>
        </div>
        <div className="left flex flex-col flex-1">
          <div className="faq-box">
            <div className="title mb-4">
              <h3>Dodatkowe pytania</h3>
            </div>
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
              title="Jakie są procedury reagowania na incydenty w Cybers One?"
              desc="Cybers One stosuje procedury reagowania na incydenty, które obejmują szybką identyfikację zagrożeń, ich izolację, analizę oraz przywracanie normalnej działalności operacyjnej."
            />
            <FQALayout
              title="Jakie są główne różnice między usługami CyberMonitor a CyberCritProtect?"
              desc="CyberMonitor koncentruje się na ciągłym monitorowaniu i wykrywaniu zagrożeń w infrastrukturze IT, natomiast CyberCritProtect skupia się na ochronie danych przed skutkami ataków typu ransomware poprzez zaawansowane strategie backupu."
            />
            <FQALayout
              title="Czy usługi Cybers One są dostępne międzynarodowo?"
              desc="Usługi Cybers One są dostępne dla klientów na całym świecie, z możliwością dostosowania do lokalnych wymogów prawnych i językowych."
            />
            <FQALayout
              title="Jakie typy ataków są simulowane w ramach testów phishingowych CyberPhish?"
              desc="Simulacje obejmują różne typy ataków phishingowych, w tym zaawansowane techniki społeczno-inżynieryjne, które naśladują rzeczywiste zagrożenia."
            />
            <FQALayout
              title="Czym różni się CyberWebVul od CyberInVul?"
              desc="CyberWebVul skupia się na stałym monitorowaniu aplikacji web w poszukiwaniu podatności, podczas gdy CyberInVul koncentruje się na monitorowaniu wewnętrznej sieci organizacji."
            />
            <FQALayout
              title="Jak często aktualizowane są procedury testów penetracyjnych w Cybers One?"
              desc="Procedury są regularnie aktualizowane, aby odpowiadały najnowszym zagrożeniom i trendom w cyberbezpieczeństwie, zazwyczaj po każdej większej zmianie w infrastrukturze klienta lub po pojawieniu się nowych metod ataków."
            />
            <FQALayout
              title="Jakie działania są podejmowane po zidentyfikowaniu podatności w testach CyberAppPentest?"
              desc="Po zidentyfikowaniu podatności, Cybers One oferuje szczegółowe zalecenia dotyczące ich usunięcia lub zmitygowania, włączając wsparcie w implementacji niezbędnych zmian."
            />
            <FQALayout
              title="Jakie elementy infrastruktury są włączone w zakres CyberInPentest?"
              desc="W zakres wchodzą wszystkie komponenty infrastruktury teleinformatycznej klienta, w tym serwery, urządzenia sieciowe, aplikacje i bazy danych."
            />
            <FQALayout
              title="Czy CyberUserProtect obejmuje również urządzenia mobilne pracowników?"
              desc="Tak, oprócz standardowej ochrony urządzeń końcowych, CyberUserProtect obejmuje również zaawansowaną ochronę urządzeń mobilnych pracowników."
            />
            <FQALayout
              title="Jakie są najważniejsze korzyści z cyklicznych testów penetracyjnych aplikacji web?"
              desc="Testy te pomagają w identyfikacji i naprawie podatności, zanim zostaną one wykorzystane przez atakujących, zwiększając bezpieczeństwo aplikacji i danych użytkowników."
            />
            <FQALayout
              title="Jakie protokoły są stosowane do raportowania w ramach CyberInPentest i CyberAppPentest?"
              desc="Raporty są opracowywane zgodnie z międzynarodowymi standardami, takimi jak Common Vulnerability Scoring System (CVSS) i Security Threat and Risk Assessment (STRAIDE)."
            />
            <FQALayout
              title="W jaki sposób Cybers One gwarantuje poufność danych podczas przeprowadzania testów i audytów?"
              desc="Wszelkie działania są prowadzone z zachowaniem najwyższych standardów bezpieczeństwa i poufności, z użyciem szyfrowanych połączeń i zabezpieczeń przed nieautoryzowanym dostępem, zapewniając, że dane klientów są chronione na każdym etapie procesu."
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default FAQ;
