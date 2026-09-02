# mikub97.github.io — strona nauczycielska

Statyczna strona-wizytówka: żadnego Jekylla, żadnych zależności. Otwiera się
dwuklikiem z dysku i wygląda tak samo, jak pod adresem publicznym.

```
index.html      wersja polska — to, co bylo index-v2.html
index_en.html   wersja angielska, tlumaczenie tej samej tresci
style.css       jeden arkusz dla obu, wylacznie jasny motyw + kreski
cv.pdf          budowane z ~/Documents/Research/cv/ (patrz tamtejszy README)
abrahamson-et-al-2026-cjep-ortho.pdf   manuskrypt CJEP, linkowany z sekcji Badania
img/            portret i flagi
.nojekyll       Pages ma nie probowac budowac tego Jekyllem
.github/workflows/static.yml   deploy: wysyla katalog jak lezy
```

Wywodzi się z poprzedniej strony (`index.html` w commicie **c43f27d**,
2025-09-07), ale nie jest jej kopią. Tamta była wizytówką badacza z dopiskiem
o lekcjach. Ta jest wizytówką nauczyciela, którego wiarygodność bierze się
z badań — bo to jest historia, którą da się sprzedać w segmencie, o który
opiera się plan, a „doktorant, który udziela korepetycji" nie jest.

## Co zostało zmienione wobec starej wersji

* **Oferta zamiast biografii.** Ścieżki z konkretnym odbiorcą i konkretnym
  zakresem. Poprzednia strona nie mówiła, czego dokładnie dotyczą lekcje —
  sekcja „Educational Offer" była zakomentowana.
* **Analiza danych na pierwszym miejscu.** Segment, o który opiera się plan
  w `projects/korepetycje/README.md`, i którego żadne dotychczasowe
  ogłoszenie nie sprzedawało.
* **Doprecyzowana afiliacja.** Międzydziedzinowa Szkoła Doktorska UW,
  dyscypliny: matematyka i psychologia. W publikacji CJEP figuruje jednostka
  macierzysta (Wydział Psychologii UW) — to nie sprzeczność, tylko dwa poziomy
  tej samej rzeczy; ważne, żeby wersja ze strony była powtórzona identycznie
  we wszystkich ogłoszeniach.
* **Publikacja jako dowód, nie jako pozycja w bibliografii.** Artykuł z CJEP
  jest opisany tak, żeby rodzic ósmoklasisty zrozumiał, o co w nim chodzi.
* **Dydaktyka akademicka 2025/2026** — CPM II i Learning & Adaptation.
  Nowe, nie było czego dodać rok temu.
* **Projekty uczniów** — grafowa analiza kompozycji zapachowych i aplikacja
  do planowania dostaw, podpisane imieniem i inicjałem. To jedyna sekcja,
  której konkurencja nie ma.
* **Pełniejsza lista szkół** — doszły Symposio (kursy maturalne)
  i Otwarte Centrum Edukacyjne / Edukacja Domowa Ursynów.

* **Kolory ze zdjęcia.** Pomarańcz `#fe6015` (ściana) i błękit `#7fb9d4`
  (niebo) wzięte pipetą z `img/michal.png`. **Kreski są wyłącznie w hero** —
  dwie ramki wychylone w przeciwne strony wokół portretu i krótki znacznik
  nad nagłówkiem. Niżej strona jest spokojna: pierwsza wersja miała jeszcze
  ukośne znaczniki przy tytułach sekcji i kreski wychodzące poza panele,
  i wyglądały przypadkowo, więc wypadły.
* **Pomarańcz zamiast cyjanu.** Dawny akcent `#06b6d4` zniknął — przycisk
  akcji jest pomarańczowy, linki w spokojnym petrolu `#1f6f8b`.
  Pomarańcz pojawia się dokładnie w dwóch miejscach: „Napisz do mnie"
  i obramowanie jednej wyróżnionej karty oferty (po usunięciu stawek karta
  trzyma się już tylko ramką i tłem — to wystarcza). Trzecie miejsce i wyróżnienie przestaje
  wyróżniać — dlatego cytat z publikacji ma neutralne tło.
* **Wyróżniona jest matematyka na egzaminy**, nie analiza danych. To decyzja
  o tym, po co ktoś tu wchodzi z ogłoszenia, a nie o tym, co jest najbardziej
  dochodowe — jeśli kiedyś ma być odwrotnie, wystarczy przenieść klasę
  `feature` na inną kartę w obu plikach HTML.

Czego świadomie **nie** zmieniono: paleta i białe panele sekcji zostają takie,
jak w c43f27d. Ciemny motyw był w pierwszej wersji tego brancha i został
wycofany — jasny jest przyjemniejszy i to jedyne kryterium, które się tu liczy.

## Jak to jest opublikowane

`main` tego repozytorium **jest** stroną: `mikub97.github.io`. Deploy robi
`.github/workflows/static.yml` — wysyła katalog na Pages bez żadnego budowania.
Push na `main` publikuje.

Wcześniejsza wersja tego pliku odradzała korzeń, bo stał tam blog podróżniczy
i rodzic ósmoklasisty wchodzący z ogłoszenia zobaczyłby najpierw relację
z Salvadoru. Ten argument przestał obowiązywać **2026-09-02**, kiedy blog
został wyprowadzony do prywatnego repozytorium **`mikub97/brasil-blog`**
(gałąź `main` to historia bloga, gałąź `brazylia` to post o Pernambuco,
karty capoeiry i teksty wszystkich postów). W korzeniu nie ma już z czym
konkurować.

Konsekwencja, o której trzeba pamiętać: **stare adresy postów bloga zwracają
teraz 404.** Nie ma żadnych przekierowań. Jeśli kiedyś będą potrzebne, treść
jest w tamtym repozytorium.

Jeśli kiedyś ma być własna domena (`michalweiss.pl` albo podobna) —
kilkadziesiąt złotych rocznie, plik `CNAME` w korzeniu i rekord DNS.

## Zanim trafi do sieci — do sprawdzenia przez człowieka

* **Stawek nie ma na stronie i nie mają wracać** (decyzja z 2026-09-02, dotyczy
  obu wersji językowych). Cena jest ustalana w rozmowie; liczby żyją wyłącznie
  w `projects/korepetycje/README.md`, poza tym repozytorium. Reguła obejmuje też
  komentarze w kodzie — źródło strony jest publiczne.
* **PDF artykułu.** Strona linkuje do manuskryptu, nie do DOI: DOI nie prowadzi
  jeszcze do opublikowanego artykułu. Przy PDF-ie musi zostać adnotacja, że to
  wersja zaakceptowana, a nie ostateczna — nagłówek pliku mówi wprost, że prawa
  ma Canadian Psychological Association.
* **Zgoda uczniów.** Na stronie stoi „Malina W." i „Zuzia D." — imię plus
  inicjał, bez nazwisk. Link do repozytorium Maliny prowadził pod
  `github.com/malinawyszynska/...`, czyli nazwisko było o jedno kliknięcie
  dalej i inicjał go nie ukrywał — dlatego został usunięty. Gdyby miał wrócić:
  albo zapytaj ją o zgodę na link, albo zostaw
  projekt bez odnośnika. **Stan obecny: żaden projekt nie ma odnośnika**,
  oba opisane są tekstem. Mimo to zapytaj obie — projekty są rozpoznawalne.
* **CV.** `cv.pdf` pochodzi z września 2025 i nie zawiera ani publikacji,
  ani zajęć z 2025/2026.
* **TidyCal.** Link `tidycal.com/mikub97` jest przeniesiony ze starej strony —
  sprawdź, czy konto nadal działa i czy kalendarz jest aktualny.
* **Portret.** `img/michal.jpg` to zdjęcie z Morro; działa, ale jest prywatne
  w tonie. Do rozważenia inne.
