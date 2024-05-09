import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

function PolitykaPrywatnosci() {
  return (
    <div className="mt-40">
      <MaxWidthWrapper>
        <div className="container-box  flex flex-col gap-6">
          <div className="title flex justify-center">
            <h1 className="text-4xl">Polityka prywatności</h1>
          </div>
          <div className="box flex flex-col gap-6">
            <ol type="1" className="list-decimal">
              <li className="font-bold text-xl">Informacje ogólne</li>
            </ol>
            <div className="desc">
              <ol className="list-decimal">
                <li>
                  Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
                  adresem url: cybersone.pl
                </li>
                <li>
                  Operatorem serwisu oraz Administratorem danych osobowych jest:
                  cybers UL. GRZYBOWSKA 2/29 00-131 WARSZAWA
                </li>
                <li>
                  Adreskontaktowy poczty elektronicznej operatora:
                  sales@cybers.zone 4. Operator jest Administratorem Twoich
                  danych osobowych w odniesieniu do danych podanych dobrowolnie
                  w Serwisie.
                </li>
                <li>
                  Serwis wykorzystuje dane osobowe w następujących celach:
                  <ul>
                    <li>a. Prowadzenie newslettera</li>
                    <li>b. Obsługa zapytań przez formularz</li>
                    <li>c. Realizacja zamówionych usług</li>
                    <li>d. Prezentacja oferty lub informacji</li>
                  </ul>
                </li>
                <li>
                  Serwis realizuje funkcje pozyskiwania informacji o
                  użytkownikach i ich zachowaniu w następujący sposób:
                  <ul>
                    <li>
                      f. Poprzez dobrowolnie wprowadzone w formularzach dane,
                      które zostają wprowadzone do systemów Operatora.
                    </li>
                    <li>
                      g. Poprzez zapisywanie w urządzeniach końcowych plików
                      cookie (tzw. „ciasteczka”).
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={2} className="list-decimal">
                <li className="font-bold text-xl">
                  Wybrane metody ochrony danych stosowane przez Operatora
                </li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    Miejsca logowania i wprowadzania danych osobowych są
                    chronione w warstwie transmisji (certyfikat SSL). Dzięki
                    temu dane osobowe i dane logowania, wprowadzone na stronie,
                    zostają zaszyfrowane w komputerze użytkownika i mogą być
                    odczytane jedynie na docelowym serwerze.
                  </li>
                  <li>
                    Istotnym elementem ochrony danych jest regularna
                    aktualizacja wszelkiego oprogramowania, wykorzystywanego
                    przez Operatora do przetwarzania danych osobowych, co w
                    szczególności oznacza regularne aktualizacje komponentów
                    programistycznych.
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={3} className="list-decimal">
                <li className="font-bold text-xl">Hosting</li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    Serwis jest hostowany (technicznie utrzymywany) na serwerach
                    operatora: inna firma
                  </li>
                  <li>
                    Firma hostingowa w celu zapewnienia niezawodności
                    technicznej prowadzi logi na poziomie serwera. Zapisowi mogą
                    podlegać:
                    <ul>
                      <li>
                        a. zasoby określone identyfikatorem URL (adresy żądanych
                        zasobów – stron, plików),
                      </li>
                      <li>b. czas nadejścia zapytania,</li>
                      <li>c. czas wysłania odpowiedzi,</li>
                      <li>
                        d. nazwę stacji klienta – identyfikacja realizowana
                        przez protokół HTTP,
                      </li>
                      <li>
                        e. informacje o błędach jakie nastąpiły przy realizacji
                        transakcji HTTP,
                      </li>
                      <li>
                        f. adres URL strony poprzednio odwiedzanej przez
                        użytkownika (referer link) – w przypadku gdy przejście
                        do Serwisu nastąpiło przez odnośnik,
                      </li>
                      <li>g. informacje o przeglądarce użytkownika,</li>
                      <li>h. informacje o adresie IP,</li>
                      <li>
                        i. informacje diagnostyczne związane z procesem
                        samodzielnego zamawiania usług poprzez rejestratory na
                        stronie,s
                      </li>
                      <li>
                        j. informacje związane z obsługą poczty elektronicznej
                        kierowanej do Operatora oraz wysyłanej przez Operatora.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={4} className="list-decimal">
                <li className="font-bold text-xl">
                  Twoje prawa i dodatkowe informacje o sposobie wykorzystania
                  danych
                </li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    W niektórych sytuacjach Administrator ma prawo przekazywać
                    Twoje dane osobowe innym odbiorcom, jeśli będzie to
                    niezbędne do wykonania zawartej z Tobą umowy lub do
                    zrealizowania obowiązków ciążących na Administratorze.
                    Dotyczy to takich grup odbiorców:
                    <ul>
                      <li>
                        a. osoby upoważnione przez nas, pracownicy i
                        współpracownicy, którzy muszą mieć dostęp do danych
                        osobowych w celu wykonywania swoich obowiązków,
                      </li>
                      <li>b. firma hostingowa,</li>
                      <li>c. firmy obsługująca mailingi,</li>
                      <li>d. firmy obsługująca komunikaty SMS,</li>
                      <li>
                        e. firmy, z którymi Administrator współpracuje w
                        zakresie marketingu własnego,
                      </li>
                      <li>f. kurierzy,</li>
                      <li>g. ubezpieczyciele,</li>
                      <li>h. kancelarie prawne i windykatorzy,</li>
                      <li>i. banki</li>
                      <li>j. operatorzy płatności,</li>
                      <li>k. organy publiczne.</li>
                    </ul>
                  </li>
                  <li>
                    Twoje dane osobowe przetwarzane przez Administratora nie
                    dłużej, niż jest to konieczne do wykonania związanych z nimi
                    czynności określonych osobnymi przepisami (np. o prowadzeniu
                    rachunkowości). W odniesieniu do danych marketingowych dane
                    nie będą przetwarzane dłużej niż przez 3 lata.
                  </li>
                  <li>
                    Przysługuje Ci prawo żądania od Administratora:
                    <ul>
                      <li>
                        a. dostępu do danych osobowych Ciebie dotyczących,
                      </li>
                      <li>b. ich sprostowania,</li>
                      <li>c. usunięcia</li>
                      <li>d. ograniczenia przetwarzania,</li>
                      <li>e. oraz przenoszenia danych.</li>
                    </ul>
                  </li>
                  <li>
                    Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
                    przetwarzania wskazanego w pkt 3.2 wobec przetwarzania
                    danych osobowych w celu wykonania prawnie uzasadnionych
                    interesów realizowanych przez Administratora, w tym
                    profilowania, przy czym prawo sprzeciwu nie będzie mogło być
                    wykonane w przypadku istnienia ważnych prawnie uzasadnionych
                    podstaw do przetwarzania, nadrzędnych wobec Ciebie
                    interesów, praw i wolności, w szczególności ustalenia,
                    dochodzenia lub obrony roszczeń.
                  </li>
                  <li>
                    Na działania Administratora przysługuje skarga do Prezesa
                    Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
                    Warszawa.
                  </li>
                  <li>
                    Podanie danych osobowych jest dobrowolne, lecz niezbędne do
                    obsługi Serwisu.
                  </li>
                  <li>
                    W stosunku do Ciebie mogą być podejmowane czynności
                    polegające na zautomatyzowanym podejmowaniu decyzji, w tym
                    profilowaniu w celu świadczenia usług w ramach zawartej
                    umowy oraz w celu prowadzenia przez Administratora
                    marketingu bezpośredniego.
                  </li>
                  <li>
                    Dane osobowe nie są przekazywane od krajów trzecich w
                    rozumieniu przepisów o ochronie danych osobowych. Oznacza
                    to, że nie przesyłamy ich poza teren Unii Europejskiej.
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={5} className="list-decimal">
                <li className="font-bold text-xl">Informacje w formularzach</li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    Serwis zbiera informacje podane dobrowolnie przez
                    użytkownika, w tym dane osobowe, o ile zostaną one podane.
                  </li>
                  <li>
                    Serwis może zapisać informacje o parametrach połączenia
                    (oznaczenie czasu, adres IP).
                  </li>
                  <li>
                    Serwis, w niektórych wypadkach, może zapisać informację
                    ułatwiającą powiązanie danych w formularzu z adresem e-mail
                    użytkownika wypełniającego formularz. W takim wypadku adres
                    e-mail użytkownika pojawia się wewnątrz adresu url strony
                    zawierającej formularz.
                  </li>
                  <li>
                    Dane podane w formularzu są przetwarzane w celu wynikającym
                    z funkcji konkretnego formularza, np. w celu dokonania
                    procesu obsługi zgłoszenia serwisowego lub kontaktu
                    handlowego, rejestracji usług itp. Każdorazowo kontekst i
                    opis formularza w czytelny sposób informuje, do czego on
                    służy.
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={6} className="list-decimal">
                <li className="font-bold text-xl">Logi Administratora</li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    Informacje zachowaniu użytkowników w serwisie mogą podlegać
                    logowaniu. Dane te są wykorzystywane w celu administrowania
                    serwisem.
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={7} className="list-decimal">
                <li className="font-bold text-xl">
                  Istotne techniki marketingowe
                </li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    Operator stosuje analizę statystyczną ruchu na stronie,
                    poprzez Google Analytics (Google Inc. z siedzibą w USA).
                    Operator nie przekazuje do operatora tej usługi danych
                    osobowych, a jedynie zanonimizowane informacje. Usługa
                    bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym
                    użytkownika. W zakresie informacji o preferencjach
                    użytkownika gromadzonych przez sieć reklamową Google
                    użytkownik może przeglądać i edytować informacje wynikające
                    z plików cookies przy pomocy narzędzia:
                    https://www.google.com/ads/preferences/
                  </li>
                  <li>
                    Operator stosuje techniki remarketingowe, pozwalające na
                    dopasowanie przekazów reklamowych do zachowania użytkownika
                    na stronie, co może dawać złudzenie, że dane osobowe
                    użytkownika są wykorzystywane do jego śledzenia, jednak w
                    praktyce nie dochodzi do przekazania żadnych danych
                    osobowych od Operatora do operatorom reklam. Technologicznym
                    warunkiem takich działań jest włączona obsługa plików
                    cookie.
                  </li>
                  <li>
                    Operator stosuje rozwiązanie badające zachowanie
                    użytkowników poprzez tworzenie map ciepła oraz nagrywanie
                    zachowania na stronie. Te informacje są anonimizowane zanim
                    zostaną przesłane do operatora usługi tak, że nie wie on
                    jakiej osoby fizycznej one dotyczą. W szczególności
                    nagrywaniu nie podlegają wpisywane hasła oraz inne dane
                    osobowe.
                  </li>
                  <li>
                    Operator stosuje rozwiązanie automatyzujące działanie
                    Serwisu w odniesieniu do użytkowników, np. mogące przesłać
                    maila do użytkownika po odwiedzeniu konkretnej podstrony, o
                    ile wyraził on zgodę na otrzymywanie korespondencji
                    handlowej od Operatora.
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={8} className="list-decimal">
                <li className="font-bold text-xl">
                  Informacja o plikach cookies
                </li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>Serwis korzysta z plików cookies.</li>
                  <li>
                    Pliki cookies (tzw. „ciasteczka”) stanowią dane
                    informatyczne, w szczególności pliki tekstowe, które
                    przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
                    przeznaczone są do korzystania ze stron internetowych
                    Serwisu. Cookies zazwyczaj zawierają nazwę strony
                    internetowej, z której pochodzą, czas przechowywania ich na
                    urządzeniu końcowym oraz unikalny numer.
                  </li>
                  <li>
                    Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
                    Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
                    operator Serwisu.
                  </li>
                  <li>
                    Pliki cookies wykorzystywane są w następujących celach:
                    <ul>
                      <li>
                        a. utrzymanie sesji użytkownika Serwisu (po
                        zalogowaniu), dzięki której użytkownik nie musi na
                        każdej podstronie Serwisu ponownie wpisywać loginu i
                        hasła;
                      </li>
                      <li>
                        b. realizacji celów określonych powyżej w części
                        "Istotne techniki marketingowe";
                      </li>
                    </ul>
                  </li>
                  <li>
                    W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
                    cookies: „sesyjne” (session cookies) oraz „stałe”
                    (persistent cookies). Cookies „sesyjne” są plikami
                    tymczasowymi, które przechowywane są w urządzeniu końcowym
                    Użytkownika do czasu wylogowania, opuszczenia strony
                    internetowej lub wyłączenia oprogramowania (przeglądarki
                    internetowej). „Stałe” pliki cookies przechowywane są w
                    urządzeniu końcowym Użytkownika przez czas określony w
                    parametrach plików cookies lub do czasu ich usunięcia przez
                    Użytkownika.
                  </li>
                  <li>
                    Oprogramowanie do przeglądania stron internetowych
                    (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
                    przechowywanie plików cookies w urządzeniu końcowym
                    Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany
                    ustawień w tym zakresie. Przeglądarka internetowa umożliwia
                    usunięcie plików cookies. Możliwe jest także automatyczne
                    blokowanie plików cookies Szczegółowe informacje na ten
                    temat zawiera pomoc lub dokumentacja przeglądarki
                    internetowej.
                  </li>
                  <li>
                    Ograniczenia stosowania plików cookies mogą wpłynąć na
                    niektóre funkcjonalności dostępne na stronach internetowych
                    Serwisu.
                  </li>
                  <li>
                    Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
                    Serwisu wykorzystywane mogą być również przez współpracujące
                    z operatorem Serwisu podmioty, w szczególności dotyczy to
                    firm: Google (Google Inc. z siedzibą w USA), Facebook
                    (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z
                    siedzibą w USA).
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol type="1" start={9} className="list-decimal">
                <li className="font-bold text-xl">
                  Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
                  zgodę?
                </li>
              </ol>
              <div className="desc">
                <ol className="list-decimal">
                  <li>
                    Jeśli użytkownik nie chce otrzymywać plików cookies, może
                    zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie
                    obsługi plików cookies niezbędnych dla procesów
                    uwierzytelniania, bezpieczeństwa, utrzymania preferencji
                    użytkownika może utrudnić, a w skrajnych przypadkach może
                    uniemożliwić korzystanie ze stron www
                  </li>
                  <li>
                    W celu zarządzania ustawienia cookies wybierz z listy
                    poniżej przeglądarkę internetową, której używasz i postępuj
                    zgodnie z instrukcjami:
                    <ul>
                      <li>a. Edge</li>
                      <li>b. Internet Explorer</li>
                      <li>c. Chrome</li>
                      <li>d. Safari</li>
                      <li>e. Firefox</li>
                      <li>f. Opera</li>
                      <li className="my-2">Urządzenia mobilne:</li>
                      <li>Android</li>
                      <li>Safari (iOS)</li>
                      <li>Windows Phone</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="box flex flex-col gap-6">
              <ol>
                <li>
                  Niniejszy wzór polityki został wygenerowany bezpłatnie, w
                  celach informacyjnych, w oparciu o naszą wiedzę, branżowe
                  praktyki i przepisy prawa obowiązujące na dzień 2018-08-14.
                  Zalecamy sprawdzenie wzoru polityki przed użyciem jej na
                  stronie. Wzór opiera się na najczęściej występujących na
                  stronach internetowych sytuacjach, ale może nie odzwierciedlać
                  pełnej i dokładnej specyfiki Twojej strony www. Przeczytaj
                  uważnie wygenerowany dokument i w razie potrzeb dostosuj go do
                  Twojej sytuacji lub zasięgnij porady prawnej. Nie bierzemy
                  odpowiedzialności za skutki posługiwania się tym dokumentem,
                  ponieważ tylko Ty masz wpłw na to, czy wszystkie informacje w
                  nim zawarte są zgodne z prawdą. Zwróć także uwagę, że Polityka
                  Prywatności, nawet najlepsza, jest tylko jednym z elementów
                  Twojej troski o dane osobowe i prywatność użytkownika na
                  stronie www.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default PolitykaPrywatnosci;
