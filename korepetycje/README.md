# Strona nauczycielska

Statyczna, samodzielna strona-wizytówka: żadnego Jekylla, żadnych zależności.
Cztery pliki plus obrazki. Otwiera się dwuklikiem z dysku i wygląda tak samo,
jak po wrzuceniu na serwer.

```
index.html      wersja polska (v1)
index-v2.html   wersja polska (v2)
index_en.html   wersja angielska
style.css       jeden arkusz dla wszystkich, wyłącznie jasny motyw + kreski
cv.pdf          budowane z ~/Documents/Research/cv/ (patrz tamtejszy README)
abrahamson-et-al-2026-cjep-ortho.pdf   manuskrypt CJEP, linkowany z sekcji o publikacji
img/            portret i flagi, z c43f27d
```

Wywodzi się z poprzedniej strony (`index.html` w commicie **c43f27d**,
2025-09-07), ale nie jest jej kopią. Tamta była wizytówką badacza z dopiskiem
o lekcjach. Ta jest wizytówką nauczyciela, którego wiarygodność bierze się
z badań — bo to jest historia, którą da się sprzedać za 250 zł za godzinę,
a „doktorant, który udziela korepetycji" nie jest.

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

## Gdzie to opublikować

Branch sam z siebie **nic nie publikuje** — GitHub Pages serwuje tylko to,
co jest na gałęzi wskazanej w ustawieniach repozytorium. Trzy sensowne opcje:

1. **Podkatalog na `main`** (najmniej pracy). Scal ten folder do `main`,
   a strona pojawi się pod `mikub97.github.io/korepetycje/`. Jekyll kopiuje
   pliki HTML bez front matter bez zmian, więc nic nie trzeba konfigurować.
2. **Osobne repozytorium** `mikub97/korepetycje` (najczyściej). Ten sam adres,
   `mikub97.github.io/korepetycje/`, ale historia i deploy nie mieszają się
   z blogiem.
3. **Własna domena** (jeśli chodzi o markę na serio). Coś w rodzaju
   `michalweiss.pl` — kilkadziesiąt złotych rocznie, plik `CNAME` i rekord DNS.
   Adres, który da się wpisać w CV i przeczytać przez telefon.

**Czego nie robić: nie stawiać tego w korzeniu `mikub97.github.io`.** Tam stoi
blog podróżniczy po polsku, częściowo za hasłem. Rodzic ósmoklasisty, który
wejdzie z ogłoszenia i zobaczy relację z Salvadoru, nie przeczyta oferty.

## Zanim trafi do sieci — do sprawdzenia przez człowieka

* **Stawek nie ma na stronie i nie mają wracać** (decyzja z 2026-09-02, dotyczy
  wszystkich trzech plików). Cena jest ustalana w rozmowie; liczby żyją wyłącznie
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
