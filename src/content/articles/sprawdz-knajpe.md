---
title: "Sprawdź Knajpę – aplikacja zbudowana w jeden dzień z pomocą AI"
description: "Jak post na Reddicie zainspirował mnie do stworzenia aplikacji mapującej restauracje naliczające obowiązkowe napiwki — i jak AI pomogło mi to zrealizować w ciągu jednego dnia."
date: 2026-03-13
tags: ["AI", "Antigravity", "Side Project", "Vercel", "Supabase", "Next.js"]
draft: false
featured: true
coverImage: "/projects/sprawdz-knajpe/main.png"
coverTheme: "dark"
---

## Skąd pomysł?

Przeglądając Reddita, trafiłem na [wątek na r/Polska](https://www.reddit.com/r/Polska/comments/1rpzrp2/lista_restauracji_w_polsce_które_same_naliczają/), w którym użytkownicy dyskutowali o restauracjach, które samodzielnie doliczają napiwek do rachunku. Ktoś zaproponował stworzenie listy takich knajp — co zresztą szybko się rozrosło w wątek pełen nazw, zdjęć paragonów i komentarzy.

Pomyślałem: fajny pomysł, ale lista na Reddicie to nie to samo co narzędzie, z którego ludzie rzeczywiście mogliby korzystać. Reddit dobrze nadaje się do dyskusji, ale słabo do zbierania i filtrowania danych. Potrzebna była aplikacja.

Następnego dnia **Sprawdź Knajpę** już działała.

## Jak działa aplikacja?

Główna idea jest prosta: możesz wyszukać restaurację przez Google Places API, dodać ją do bazy i ocenić według kilku kryteriów. Inne osoby mogą potem głosować na te oceny.

<figure>
  <img src="/projects/sprawdz-knajpe/main.png" alt="Strona główna z mapą i listą restauracji" />
  <figcaption>Widok główny — mapa z pinami i lista restauracji po lewej stronie.</figcaption>
</figure>

Po kliknięciu w pin na mapie pojawia się tooltip z podglądem najważniejszych informacji o lokalu.

<figure>
  <img src="/projects/sprawdz-knajpe/tooltip.png" alt="Podgląd restauracji na mapie" />
  <figcaption>Tooltip nad pinem — szybki podgląd ocen bez wchodzenia w szczegóły.</figcaption>
</figure>

Każda restauracja ma swój dedykowany widok szczegółowy.

<figure>
  <img src="/projects/sprawdz-knajpe/details.png" alt="Szczegóły restauracji" />
  <figcaption>Widok szczegółowy restauracji z adresem, zdjęciami i linkiem do Google Maps.</figcaption>
</figure>

Serce aplikacji to sekcja z głosowaniem na poszczególne cechy lokalu.

<figure>
  <img src="/projects/sprawdz-knajpe/features.png" alt="Lista opcji do głosowania" />
  <figcaption>Cechy restauracji — każdą można ocenić na „tak" lub „nie".</figcaption>
</figure>

## Co można oceniać?

Wśród dostępnych kryteriów oceny znajdziesz m.in.:

- **Obowiązkowy napiwek** – czy restauracja sama dokleja go do rachunku?
- **Darmowa woda do picia** – czy dostępna jest woda kranowa bez opłat?
- I kilka innych cech, które pomagają ocenić, czy warto odwiedzić dane miejsce.

## System głosowania — algorytm Wilsona

Zwykłe zliczanie głosów „za" i „przeciw" ma pewien problem: ogromna liczba głosów za może przyćmić nawet kilka bardzo trafnych głosów przeciw. Dlatego siła każdej oceny jest liczona za pomocą **dolnej granicy przedziału ufności Wilsona** — tego samego algorytmu, który stosuje Reddit do rankingowania komentarzy.

Dzięki temu wyniki są uczciwe nawet przy małej liczbie głosów, a popularność lokalu nie przekłamuje jego oceny.

## Jak zapobiegam vote bombingowi?

Żeby zapobiec masowemu podbijaniu lub zaniżaniu wyników przez jedną osobę, każdy głos jest identyfikowany przez **hash** złożony z:
- adresu IP,
- fingerprinta przeglądarki,
- identyfikatora sesji.

Kluczowe: **żadna z tych danych nie jest przechowywana w bazie w oryginalnej postaci** — tylko ich hash. Nie wiem, kto głosował, ale system wie, że ktoś już głosował z danego urządzenia i nie pozwoli zagłosować ponownie.

## Stack technologiczny

| Warstwa | Technologia |
|:---|:---|
| Frontend | Next.js |
| Hosting & Serverless | Vercel |
| Baza danych & Storage | Supabase |
| Mapy | Google Maps API |
| Wyszukiwanie restauracji | Google Places API |
| IDE / Asystent AI | Antigravity |

Logika zapisująca dane do bazy ukryta jest w funkcjach serverless na Vercelu — frontend nigdy nie ma bezpośredniego dostępu do bazy danych.

## Jak powstało tak szybko?

Cały projekt zajął łącznie około **6 godzin pracy** w **Antigravity** — od pomysłu do działającej aplikacji. Przy czym spora część tego czasu poszła na optymalizację kosztów API Google: Places API nie jest tanie, więc trzeba było starannie przemyśleć, które dane cachować w Supabase, a które pobierać na żywo.

---

*Sprawdź Knajpę — marzec 2026. Zbudowane z pomocą Google Antigravity.*
