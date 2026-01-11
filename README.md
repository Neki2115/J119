# J119
to prosta aplikacja webowa dla restauracji, stworzona w Node.js z użyciem Express i EJS.

Funkcjonalności:

CRUD (tworzenie, odczyt, aktualizacja, usuwanie) dla dań w menu
Filtracja i sortowanie dań przez URL i formularz GET
Rejestracja użytkowników z hashowaniem haseł (bcrypt)
Modularna struktura MVC (models, views, controllers, routes, middleware)
Walidacja danych wejściowych (express-validator)
Podstawowa obsługa błędów i spójna nawigacja

Widoki (EJS):

Home
Lista dań (/dishes)
Szczegóły dania (/dishes/:id)
Dodawanie nowego dania (/dishes/new)
Edycja dania (/dishes/:id/edit)
Rejestracja użytkownika (/users/register)

Wymagania

Node.js 
MongoDB 
npm

Instalacja:
npm install
utworzenie pliku .env w głównym katalogu z tymi danymi:
MONGO_URI=mongodb://127.0.0.1:27017/restaurant
PORT=3000
npm start
