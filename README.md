# Blog — instrukcja obsługi

Ściągawka do pisania i publikowania postów bez niczyjej pomocy.
Wszystkie komendy odpalasz z katalogu repo:

```bash
cd ~/Documents/Capoeira\ Research/brasil-blog/io
```

---

## Jak to jest poskładane

Dwie rzeczy, które trzeba zrozumieć raz, a potem wszystko jest oczywiste:

1. **`_posts/` to Twoja prywatna kopia robocza.** Jest w `.gitignore` i wyłączona
   z builda Jekylla. Nic stamtąd samo z siebie nie trafia do internetu.
2. **O tym, co jest publiczne, decyduje `_data/posts.yml`.** Skrypt
   `publish_posts.py` przepisuje wymienione tam posty do `assets/posts/` jako
   czysty markdown — i dopiero *to* widzi strona.

Wniosek praktyczny: **po każdej zmianie w `_posts/` musisz odpalić skrypt**,
inaczej strona pokaże starą wersję. Livereload tego nie łapie.

Front matter (nagłówek `---` w pliku `.md`) jest przy publikacji **obcinany
i ignorowany**. Tytuł, data, lokalizacja i zdjęcie brane są wyłącznie
z `_data/posts.yml`.

---

## Podgląd lokalny

```bash
bundle exec jekyll serve --livereload
```

Otwórz **http://127.0.0.1:4000/**. Zatrzymanie: `Ctrl-C`.

Nie otwieraj plików z `_site/` przez podwójne kliknięcie — przy `file://`
przeglądarka zablokuje wczytywanie treści postów i zobaczysz „Nie udało się
wczytać treści posta".

---

## Poprawiam istniejący post

```bash
# 1. edytujesz _posts/2025-08-14-rio-de-janeiro.md w edytorze
# 2. przepisujesz zmiany do części publicznej:
python3 scripts/publish_posts.py
# 3. odświeżasz kartę w przeglądarce i sprawdzasz
# 4. wysyłasz w świat:
git add assets/posts
git commit -m "Poprawki w poście o Rio"
git push
```

---

## Piszę nowy post

**Krok 1.** Utwórz plik `_posts/YYYY-MM-DD-slug.md`. Nagłówek jest opcjonalny
(i tak zostanie obcięty) — możesz zacząć od razu od tekstu.

**Krok 2.** Dopisz wpis do `_data/posts.yml`. **Bez tego kroku post nie istnieje** —
nie pojawi się ani na liście, ani na osi czasu.

```yaml
- slug: 2026-09-20-salvador-powrot     # musi być identyczny z nazwą pliku .md
  title: "Powrót do Salvadoru"
  date: 2026-09-20
  location: "Salvador, Bahia"          # opcjonalne, pokazuje się pod datą
  lat: -12.9714                        # opcjonalne — bez tego brak pinezki na mapie
  lng: -38.5014
  cover_image: /assets/images/bahia/foto.jpg   # opcjonalne, miniatura na liście
```

⚠️ **Kolejność w `posts.yml` ma znaczenie: chronologicznie, od najstarszego.**
Nowe posty dopisuj **na końcu pliku**. Strona główna odwraca tę listę (najnowsze
u góry), a oś czasu i strzałki „Wcześniej / Dalej" czytają ją wprost. Zła
kolejność w pliku = zła kolejność wszędzie.

**Krok 3.** Publikacja i wysyłka:

```bash
python3 scripts/publish_posts.py
git add assets/posts _data/posts.yml
git commit -m "Nowy post: Powrót do Salvadoru"
git push
```

---

## Chowam post ze strony

W `_data/posts.yml` dopisz do wpisu `hidden: true`, a potem koniecznie:

```bash
python3 scripts/publish_posts.py --prune
```

⚠️ **Samo `hidden: true` nie wystarczy.** Bez `--prune` jawny plik zostaje
w `assets/posts/` i dalej jest dostępny w internecie pod bezpośrednim adresem.
Skrypt bez tej flagi tylko ostrzeże — wypisze `still published`. Jak zobaczysz
to zdanie, znaczy, że robota nie jest skończona.

Potem `git add -A assets/posts _data/posts.yml`, commit, push.

---

## Zdjęcia

Wrzuć do `assets/images/<folder>/`, w tekście odwołuj się od korzenia:

```markdown
![Opis](/assets/images/bahia/20251007_220739.jpg)
```

Nie zapomnij `git add assets/images` — to częsty powód „u mnie działa,
a na stronie nie ma zdjęcia".

---

## Publikacja na żywo

`git push` na gałąź `main` uruchamia GitHub Actions, który buduje stronę
i wystawia ją na **https://mikub97.github.io**. Trwa to zwykle 1–2 minuty.

```bash
gh run list --limit 3      # status ostatnich buildów
gh run watch               # podgląd na żywo
```

Bez `gh`: zakładka Actions w repo na GitHubie.

---

## Co nigdy nie trafia do internetu

- `_posts/*.md` — cały prywatny warsztat (gitignore + wyłączone z builda)
- posty z `hidden: true` w `posts.yml` — o ile zrobiłeś `--prune`
- posty, których w ogóle nie ma w `posts.yml` (np. te z 2020)
- podstrona Capoeira (karty i quiz) — pliki leżą na dysku, ale są wyłączone
  z builda w `_config.yml`
- `assets/enc/` i `scripts/` — stare zaszyfrowane kopie, trzymane jako backup

Sprawdzenie, co realnie pójdzie na serwer:

```bash
git status              # _posts/ NIE powinno się tu pojawić — tak ma być
```

---

## Gdy coś nie gra

| Objaw | Przyczyna |
|---|---|
| Post pokazuje starą treść | Nie odpaliłeś `publish_posts.py` po edycji |
| „Nie udało się wczytać treści posta" | Brak pliku w `assets/posts/` — jw. |
| „Nie ma takiego posta" | Slug w adresie nie pasuje do `posts.yml`, albo post ma `hidden: true` |
| Nowy post nie widać na liście | Brak wpisu w `_data/posts.yml` |
| Posty w złej kolejności | `posts.yml` nie jest ułożony rosnąco po dacie |
| Zmiana w `_config.yml` nie działa | Jekyll nie przeładowuje configu — zatrzymaj serwer i odpal ponownie |
| `command not found: bundle` | `gem install bundler`, potem `bundle install` |
| `ModuleNotFoundError: yaml` | `pip3 install pyyaml` |

---

## Kontrola przed pushem

```bash
python3 scripts/publish_posts.py --check   # co poszłoby do publikacji, nic nie zapisuje
```

Wypisze listę publikowanych postów oraz — pod „Not published" — te pominięte
jako ukryte lub niewymienione w `posts.yml`. Warto rzucić okiem, czy nic
prywatnego nie wskoczyło na pierwszą listę.
