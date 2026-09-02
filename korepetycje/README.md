# Strona nauczycielska

Statyczna, samodzielna strona-wizytówka: żadnego Jekylla, żadnych zależności.
Cztery pliki plus obrazki. Otwiera się dwuklikiem z dysku i wygląda tak samo,
jak po wrzuceniu na serwer.

```
index.html      wersja polska (główna)
index_en.html   wersja angielska
style.css       jeden arkusz dla obu, wyłącznie jasny motyw
cv.pdf          odtworzone z commita c43f27d
img/            portret i flagi, też z c43f27d
```

Wywodzi się z poprzedniej strony (`index.html` w commicie **c43f27d**,
2025-09-07), ale nie jest jej kopią. Tamta była wizytówką badacza z dopiskiem
o lekcjach. Ta jest wizytówką nauczyciela, którego wiarygodność bierze się
z badań — bo to jest historia, którą da się sprzedać za 250 zł za godzinę,
a „doktorant, który udziela korepetycji" nie jest.

## Co zostało zmienione wobec starej wersji

* **Oferta zamiast biografii.** Trzy ścieżki, każda z konkretnym odbiorcą
  i stawką. Poprzednia strona nie mówiła, ile kosztuje lekcja ani czego
  dokładnie dotyczy — sekcja „Educational Offer" była zakomentowana.
* **Analiza danych na pierwszym miejscu.** Segment 250 zł, o który opiera się
  plan w `projects/korepetycje/README.md`, i którego żadne dotychczasowe
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
* **Projekty uczniów** — Malina (grafowa analiza kompozycji zapachowych)
  i Zuzanna (aplikacja do planowania dostaw). To jedyna sekcja, której
  konkurencja nie ma.
* **Pełniejsza lista szkół** — doszły Symposio (kursy maturalne)
  i Otwarte Centrum Edukacyjne / Edukacja Domowa Ursynów.

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

* **Stawki.** W `index.html` stoi 250 zł i 180 zł, komentarz w kodzie mówi gdzie.
  180 zł to nie jest stawka, którą płaci Tadzio — świadomie.
* **PDF artykułu.** Strona linkuje do DOI, a nie do preprintu, i tak powinno
  zostać: nagłówek pliku mówi wprost, że to nie jest wersja ostateczna
  i że prawa ma Canadian Psychological Association.
* **Zgoda uczniów.** Malina i Zuzanna są wymienione z imienia i nazwiska.
  Malina ma repozytorium publiczne, więc link jest bezpieczny, ale
  **zapytaj obie**, zanim to pójdzie w świat.
* **CV.** `cv.pdf` pochodzi z września 2025 i nie zawiera ani publikacji,
  ani zajęć z 2025/2026.
* **TidyCal.** Link `tidycal.com/mikub97` jest przeniesiony ze starej strony —
  sprawdź, czy konto nadal działa i czy kalendarz jest aktualny.
* **Portret.** `img/michal.jpg` to zdjęcie z Morro; działa, ale jest prywatne
  w tonie. Do rozważenia inne.
