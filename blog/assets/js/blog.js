/* Wspólny loader listy postów dla /blog.
 *
 * Jedynym źródłem listy jest assets/posts.json. Przedtem ta sama lista była
 * wklejona w trzech miejscach naraz — kartami w index.html, tablicą POSTS_DATA
 * w post/index.html i tablicą var posts w timeline/index.html — bo generował je
 * Jekyll z _data/posts.yml. Blog nie jest już budowany: dodanie posta to plik
 * .md w assets/posts/ i jeden wpis tutaj.
 *
 * Post ukryty = po prostu nieobecny w posts.json. Nie ma flagi "hidden",
 * bo wpis z flagą i tak wyciekałby tytułem do źródła strony.
 */
(function (global) {
  'use strict';

  var BASE = '/blog';

  /* Posty od najnowszego. posts.json jest w kolejności chronologicznej —
     tak się je czyta i tak się je dopisuje, na końcu. */
  function load() {
    return fetch(BASE + '/assets/posts.json')
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (posts) {
        return posts.slice().sort(function (a, b) {
          return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
        });
      });
  }

  /* Południe, nie północ: przy dacie bez godziny strefa czasowa potrafi
     cofnąć dzień o jeden wstecz. */
  function formatDate(iso) {
    return new Date(iso + 'T12:00:00').toLocaleDateString('pl-PL', {
      day: 'numeric', month: '2-digit', year: 'numeric'
    });
  }

  function postUrl(slug) {
    return BASE + '/post/?s=' + encodeURIComponent(slug);
  }

  global.Blog = { base: BASE, load: load, formatDate: formatDate, postUrl: postUrl };
})(window);
