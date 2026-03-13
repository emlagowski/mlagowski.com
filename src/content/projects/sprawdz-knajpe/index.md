---
title: "Sprawdź Knajpę"
description: "Aplikacja mapująca restauracje w Polsce — sprawdź, czy knajpa nalicza obowiązkowy napiwek, oferuje darmową wodę i wiele więcej."
coverImage: "/projects/sprawdz-knajpe/main.png"
coverTheme: "dark"
# images:
#   - "/projects/sprawdz-knajpe/main.png"
#   - "/projects/sprawdz-knajpe/tooltip.png"
#   - "/projects/sprawdz-knajpe/details.png"
#   - "/projects/sprawdz-knajpe/features.png"
technologies: ["Next.js", "TypeScript", "Vercel", "Supabase", "Google Maps API", "Google Places API", "Antigravity"]
demo: "https://www.sprawdzknajpe.pl"
featured: true
date: 2026-03-13
---

## Opis projektu

**Sprawdź Knajpę** to aplikacja, która pozwala znaleźć restaurację na mapie i sprawdzić, czy stosuje praktyki, o których warto wiedzieć przed wizytą — takie jak naliczanie obowiązkowego napiwku czy brak darmowej wody do picia.

Każda restauracja może być oceniana przez społeczność według kilku kryteriów. Siła głosów jest wyliczana algorytmem Wilsona, żeby wyniki były uczciwe nawet przy małej liczbie głosów.

Projekt powstał jako odpowiedź na [wątek na r/Polska](https://www.reddit.com/r/Polska/comments/1rpzrp2/lista_restauracji_w_polsce_które_same_naliczają/) i zajął łącznie około 6 godzin od pomysłu do działającej aplikacji.

## Główne funkcje

- Wyszukiwanie restauracji przez Google Places API
- Wyświetlanie wyników na interaktywnej mapie z pinami
- Głosowanie na cechy lokalu (napiwek, woda, i inne)
- Filtrowanie i sortowanie listy restauracji
- Ochrona przed vote bombingiem przez anonimowy hash (IP + fingerprint + sessionId)

## Zrzuty ekranu

<figure>
  <img src="/projects/sprawdz-knajpe/main.png" alt="Strona główna z mapą i listą restauracji" />
  <figcaption>Widok główny — mapa z pinami i lista restauracji.</figcaption>
</figure>

<figure>
  <img src="/projects/sprawdz-knajpe/tooltip.png" alt="Tooltip na mapie" />
  <figcaption>Szybki podgląd ocen po kliknięciu pinu na mapie.</figcaption>
</figure>

<figure>
  <img src="/projects/sprawdz-knajpe/details.png" alt="Widok szczegółowy restauracji" />
  <figcaption>Szczegółowy widok restauracji z adresem i linkiem do Google Maps.</figcaption>
</figure>

<figure>
  <img src="/projects/sprawdz-knajpe/features.png" alt="Lista cech do głosowania" />
  <figcaption>Lista kryteriów — każdą cechę można ocenić na „tak" lub „nie".</figcaption>
</figure>

## Więcej

Przeczytaj [artykuł o tym, jak powstał projekt](/articles/sprawdz-knajpe/) — razem z opisem architektury, systemu głosowania i jak AI pomogło w budowie.
