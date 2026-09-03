# mikub97.github.io — portfolio naukowe

Statyczna strona osobista: żadnego Jekylla, żadnych zależności. Otwiera się
dwuklikiem z dysku i wygląda dokładnie tak, jak pod adresem publicznym — to
pełny podgląd, nie przybliżenie.

```
index.html      ANGIELSKI — strona główna
index_pl.html   polski, ta sama treść
index_en.html   zaślepka: stary adres wersji angielskiej, meta refresh na korzeń
style.css       jeden arkusz dla obu wersji, wyłącznie jasny motyw
cv.pdf          budowane z ~/Documents/Research/cv/ (patrz tamtejszy README)
abrahamson-et-al-2026-cjep-ortho.pdf        manuskrypt CJEP
from-center-to-circle-esri-2026-poster.pdf  poster z ESRI 2026
img/            portret i flagi
blog/           WYNIK BUDOWANIA, nie źródło — patrz niżej
.nojekyll       Pages ma nie próbować budować tego Jekyllem
.github/workflows/static.yml   deploy: wysyła katalog jak leży
```

## `blog/` — katalog, którego się nie edytuje

Pod `mikub97.github.io/blog` stoi blog podróżniczy. **Nie ma do niego żadnego
odnośnika ze strony głównej** i tak ma zostać — adres działa tylko wpisany
z palca (decyzja 2026-09-03).

Wszystko w `blog/` to **wygenerowany HTML**. Źródło jest w osobnym, prywatnym
repozytorium `mikub97/brasil-blog` (lokalnie `~/Documents/Research/brasil-blog/io`),
bo blog jest Jekyllem, a to repo Jekylla nie buduje. Ręczna edycja czegokolwiek
w `blog/` zniknie przy najbliższym przebudowaniu.

Nowy post albo poprawka w istniejącym:

```sh
cd ~/Documents/Research/brasil-blog/io
# 1. napisz _posts/RRRR-MM-DD-slug.md, dopisz wpis do _data/posts.yml
python3 scripts/publish_posts.py     # markdown -> assets/posts/
./scripts/build_for_site.sh          # Jekyll -> ten katalog blog/
cd ~/Documents/codes/mikub97.github.io && git add blog && git commit && git push
```

Skrypt buduje z nakładką `_config.site.yml`, która ustawia `baseurl: /blog`
i wycina to, czego na stronie być nie ma: kanał RSS, podstronę „O tej stronie",
katalog `scripts/` (razem z `crypt.py`), prywatne `_posts/`, podstrony o capoeirze,
oba PDF-y i dziewięć nieużywanych plików graficznych. Synchronizuje przez
`rsync --delete`, więc usunięte zdjęcie faktycznie znika ze strony.

Publikowanych jest **sześć** postów. Dwa mają w `posts.yml` flagę `hidden: true`
i nie wychodzą na zewnątrz: ich markdown nie jest kopiowany do `assets/posts/`,
a czytnik filtruje je po stronie przeglądarki. Jeśli któryś ma się kiedyś pojawić,
zdejmij flagę i przebuduj — pamiętając, że post o EVA używa zdjęć z
`assets/images/capoeira/`, które `_config.site.yml` teraz wyklucza.

## Historia i kierunek

Ta strona przeszła trzy wcielenia i warto wiedzieć, dlaczego jest, jaka jest.

1. **Wizytówka badacza** (commit `c43f27d`, 2025-09) — trzy akapity bio,
   bez dorobku, z dopiskiem o lekcjach.
2. **Wizytówka nauczyciela** (2026-09-02) — oferta korepetycji na pierwszym
   miejscu, badania jako uwiarygodnienie oferty. Blog podróżniczy wyprowadzony
   wtedy do prywatnego repo `mikub97/brasil-blog`, strona weszła do korzenia.
3. **Portfolio naukowe** (2026-09-03, obecne) — badania, publikacje i projekty
   na pierwszym planie; nauczanie zachowane, ale jako jedna sekcja niżej.
   Angielski został domyślnym językiem, polski schował się pod flagę.

Trzecie wcielenie jest bliższe pierwszemu niż drugiemu, ale nie jest do niego
powrotem: tamto miało bio i zero dorobku, to ma grant, publikację, wystąpienia
i narzędzie.

## Zasady, które łatwo złamać przez przypadek

* **Stawek nie ma na stronie i nie mają wracać** (decyzja 2026-09-02). Cena jest
  ustalana w rozmowie; liczby żyją wyłącznie w `Research/projects/korepetycje/`,
  poza tym repozytorium. Reguła obejmuje też komentarze w kodzie — źródło strony
  jest publiczne.
* **Pomarańcz tylko w liniach i tekście, nigdy jako wypełnione tło.** Krótka
  kreska pod nagłówkiem sekcji, daty w listach, krawędź cytatu, obwódki pigułek.
  Jedynym wypełnieniem jest przycisk akcji. Wyróżniona kolorowym tłem karta była
  i została zdjęta — czytała się jak ranking.
* **Nowego CSS praktycznie nie potrzeba.** Cała strona składa się z komponentów,
  które już są w `style.css`. Jeśli piszesz nowy — sprawdź najpierw, czy nie
  powielasz `.cards`, `.facts`, `.pill` albo `blockquote.paper`.
* **`index.html` jest po angielsku.** Łatwo o pomyłkę, bo przez rok było odwrotnie.

## Czego tu nie publikować

Wynika z etyki projektu EVA i z tego, czyje to są dane:

* surowe wideo, dane pozy i bazy sesji — wszędzie są rozpoznawalne osoby trzecie,
  a EVA ma w zobowiązaniach etycznych zapis, że przetwarzanie jest w 100% offline
* treść wniosku EVA poza poziomem abstraktu — hipotezy, budżet, formularze
* prywatne repozytoria: `ORTHO_DB`, `DIMS_ORTHO_VIEWER`, `hub`, `roda`, `treino`,
  `brasil-blog`, `Zuzia_Internal`, `storytelling_study`
* niesfinansowany wniosek Impulsy — odrzucone wnioski nie są dorobkiem

## Do sprawdzenia przez człowieka

* **Licencje zdjęć w posterze ESRI.** `from-center-to-circle-esri-2026-poster.pdf`
  zawiera zdjęcia osób trzecich o niepewnym pochodzeniu (`angola.jpg`,
  `zimba.jpeg`, stockowe berimbau) — źródła w
  `Research/projects/eva/poster/`. **Sprawdź przed pushem.** Jeśli licencja jest
  niejasna: wymień zdjęcia albo zostaw sam tytuł wystąpienia bez odnośnika do PDF.
* **PDF artykułu.** Strona linkuje do manuskryptu, nie do DOI: DOI nie prowadzi
  jeszcze do opublikowanego artykułu. Adnotacja, że to wersja zaakceptowana,
  a nie ostateczna, musi zostać — nagłówek pliku mówi wprost, że prawa ma
  Canadian Psychological Association.
* **Zgoda uczniów.** „Malina W." i „Zuzia D." — imię plus inicjał, bez nazwisk
  i bez odnośników do repozytoriów. Mimo to zapytaj obie: projekty są rozpoznawalne.
* **Brak ORCID.** Portfolio naukowe bez ORCID wygląda na niedokończone. Jak
  założysz, dopisz link w hero obok GitHuba.

## Jak to jest opublikowane

`main` tego repozytorium **jest** stroną. Deploy robi
`.github/workflows/static.yml` — wysyła katalog na Pages bez budowania.
**Push publikuje.**

Stare adresy postów bloga podróżniczego zwracają 404, bez przekierowań; treść
jest w `mikub97/brasil-blog`.
