# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `parcel-project-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи зависимости проекта в терминале командой `npm install` .
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляй в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой убедись что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.

# Dokumentacja API do Filmu

## Wprowadzenie

To API umożliwia dostęp do informacji o filmach, w tym popularnych filmach dnia,
tygodnia, nadchodzących filmach oraz wyszukiwania filmów według różnych
kryteriów. API wykorzystuje dane z TMDB (The Movie Database).

## Podstawowe informacje

- **Bazowy URL**: `https://api.themoviedb.org/3`
- **Klucz API**: `API_KEY`

## Endpoints

### 1. Pobieranie popularnych filmów dnia

- **Endpoint**: `/trending/movie/day`
- **Metoda**: `GET`
- **Parametry**:

  - `page` (opcjonalny, domyślnie `1`): Numer strony do zwrócenia.

- **Przykładowe zapytanie**:

  ```javascript
  const popularToday = await getPopularMoviesToday(1);
  ```

- **Odpowiedź**:
  ```json
  {
    "results": [
      {
  	"id": 1247458,
  	"title": "In Her Place",
  	"original_title": "El lugar de la otra",
  	"original_language": "es",
  	"release_date": "2024-09-30",
  	"overview": "After Chilean writer María Carolina Geel murders her lover, the case captivates shy legal secretary Mercedes, sparking a connection between the two women.",
  	"adult": false,
  	"backdrop_path": "/ynS5uksQzVyDs3ySEjnQADnwoCB.jpg",
  	"genre_ids": [18, 80, 53],
  	"popularity": 23.198,
  	"poster_path": "/jlnmzV9w2w85ch91HDnukQz1ynl.jpg",
  	"video": false,
  	"vote_average": 6.4,
  	"vote_count": 4
      },
      ...
    ],
    "totalPages": 10
  }
  ```

### 2. Pobieranie popularnych filmów tygodnia

- **Endpoint**: `/trending/movie/week`
- **Metoda**: `GET`
- **Parametry**:

  - `page` (opcjonalny, domyślnie `1`): Numer strony do zwrócenia.

- **Przykładowe zapytanie**:

  ```javascript
  const popularWeek = await getPopularMoviesWeek(1);
  ```

- **Odpowiedź**:
  ```json
  {
    "results": [
      {
  	"id": 917496,
  	"title": "Beetlejuice Beetlejuice",
  	"original_title": "Beetlejuice Beetlejuice",
  	"original_language": "en",
  	"release_date": "2024-09-04",
  	"overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
  	"adult": false,
  	"backdrop_path": "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg",
  	"genre_ids": [35, 14, 27],
  	"popularity": 3756.736,
  	"poster_path": "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
  	"video": false,
  	"vote_average": 7.21,
  	"vote_count": 1157
      },
      ...
    ],
    "totalPages": 5
  }
  ```

### 3. Pobieranie nadchodzących filmów

- **Endpoint**: `/movie/upcoming`
- **Metoda**: `GET`
- **Parametry**:

  - `page` (opcjonalny, domyślnie `1`): Numer strony do zwrócenia.

- **Przykładowe zapytanie**:

  ```javascript
  const upcomingMovies = await getUpcomingMovies(1);
  ```

- **Odpowiedź**:
  ```json
  {
    "results": [
      {
  	"id": 1034541,
  	"title": "Terrifier 3",
  	"original_title": "Terrifier 3",
  	"original_language": "en",
  	"release_date": "2024-10-09",
  	"overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
  	"adult": false,
  	"backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
  	"genre_ids": [27, 53],
  	"popularity": 1942.148,
  	"poster_path": "/7NDHoebflLwL1CcgLJ9wZbbDrmV.jpg",
  	"video": false,
  	"vote_average": 7.2,
  	"vote_count": 32
      },
      ...
    ],
    "totalPages": 8
  }
  ```

### 4. Wyszukiwanie filmów

- **Endpoint**: `/search/movie`
- **Metoda**: `GET`
- **Parametry**:

  - `query` (opcjonalny): Zapytanie do wyszukania.
  - `year` (opcjonalny): Rok wydania filmu.
  - `country` (opcjonalny): Kraj produkcji filmu.
  - `page` (opcjonalny, domyślnie `1`): Numer strony do zwrócenia.

- **Przykładowe zapytanie**:

  ```javascript
  const searchResults = await searchMovies('Speed', '2024', 'DE', 1);
  ```

- **Odpowiedź**:
  ```json
  {
    "results": [
      {
        "id": 1266344,
        "title": "Extreme Speed Police: The War on Drugs",
        "original_title": "极速战警之毒暴",
        "original_language": "zh",
        "overview": "The film is based on the true story of the 516 Sichuan drug production and trafficking case supervised by the Ministry of Public Security. On a national highway in Dachuan City, Cao Renfan, the squadron leader of the anti-narcotics brigade, led the team and was fighting fiercely with the desperate drug traffickers who had hijacked the bus.",
        "release_date": "2024-03-29",
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "popularity": 1.849,
        "poster_path": "/zuxh8fWQvEeEZv8cH2k1Tb1Hr3v.jpg",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      ...
    ],
    "totalPages": 3
  }
  ```

### 5. Pobieranie szczegółowych informacji o filmie

- **Endpoint**: `/movie/{movieId}`
- **Metoda**: `GET`
- **Parametry**:

  - `movieId`: ID filmu, którego szczegóły chcesz pobrać.

- **Przykładowe zapytanie**:

  ```javascript
  const movieDetails = await getMovieDetails(550);
  ```

- **Odpowiedź**:
  ```json
  {
    "id": 550,
    "title": "Fight Club",
    "original_title": "Fight Club",
    "original_language": "en",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "release_date": "1999-10-15",
    "adult": false,
    "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    "belongs_to_collection": null,
    "budget": 63000000,
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "homepage": "http://www.foxmovies.com/movies/fight-club",
    "imdb_id": "tt0137523",
    "origin_country": ["US"],
    "popularity": 87.785,
    "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "production_companies": [
      {
        "id": 711,
        "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
        "name": "Fox 2000 Pictures",
        "origin_country": "US"
      },
      {
        "id": 508,
        "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
        "name": "Regency Enterprises",
        "origin_country": "US"
      },
      {
        "id": 4700,
        "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
        "name": "The Linson Company",
        "origin_country": "US"
      },
      {
        "id": 25,
        "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        "name": "20th Century Fox",
        "origin_country": "US"
      },
      {
        "id": 20555,
        "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
        "name": "Taurus Film",
        "origin_country": "DE"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "DE",
        "name": "Germany"
      },
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "revenue": 100853753,
    "runtime": 139,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Mischief. Mayhem. Soap.",
    "vote_average": 8.438,
    "vote_count": 29201,
    "video": false
  }
  ```

### 6. Pobieranie zwiastunów filmu

- **Endpoint**: `/movie/{movieId}/videos`
- **Metoda**: `GET`
- **Parametry**:

  - `movieId`: ID filmu, którego zwiastuny chcesz pobrać.

- **Przykładowe zapytanie**:

  ```javascript
  const movieVideos = await getMovieVideos(550);
  ```

- **Odpowiedź**:
  ```json
  {
    "results": [
      {
        "id": "64fb16fbdb4ed610343d72c3",
        "iso_639_1": "en",
        "iso_3166_1": "US",
        "key": "dfeUzm6KF4g",
        "name": "20th Anniversary Trailer",
        "official": true,
        "published_at": "2019-10-15T18:59:47.000Z",
        "site": "YouTube",
        "size": 1080,
        "type": "Trailer"
      },
      ...
    ]
  }
  ```

### 7. Pobieranie listy gatunków

- **Endpoint**: `/genre/movie/list`
- **Metoda**: `GET`

- **Przykładowe zapytanie**:

  ```javascript
  const genres = await getGenres();
  ```

- **Odpowiedź**:
  ```json
  {
    "genres": [
      {
        "id": 28,
        "name": "Akcja"
      },
      ...
    ]
  }
  ```

### 8. Pobieranie listy krajów

- **Endpoint**: `/configuration/countries`
- **Metoda**: `GET`

- **Przykładowe zapytanie**:

  ```javascript
  const countries = await getCountries();
  ```

- **Odpowiedź**:
  ```json
  [
    {
    "english_name": "Germany"
      "iso_3166_1": "DE",
      "name": "Niemcy"
    },
    ...
  ]
  ```

## Przykład integracji z HTML

```html
<button id="loadPopularMovies">Załaduj popularne filmy dnia</button>
<div id="moviesContainer"></div>

<script>
  document
    .getElementById('loadPopularMovies')
    .addEventListener('click', async () => {
      const popularToday = await getPopularMoviesToday(1);
      const container = document.getElementById('moviesContainer');
      container.innerHTML = ''; // Czyści poprzednie wyniki
      popularToday.results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.textContent = movie.title;
        container.appendChild(movieElement);
      });
    });
</script>
```
