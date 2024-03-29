# Ultimate Pokedex

### Please do not fork this repo or make pull requests! If you find an issue, let me know and I will happily fix it myself. Most "issues" are there by choice or I haven't gotten to fixing them yet. I am currently working full-time so there's a high chance that an issue you found has already been fixed, it just hasn't been pushed yet. Thank you!

#

[![site status](https://img.shields.io/website?down_color=critical&down_message=offline&up_color=success&up_message=online&url=https%3A%2F%2Ftheultimatepokedex.xyz)](https://img.shields.io/website?down_color=critical&down_message=offline&up_color=success&up_message=online&url=https%3A%2F%2Ftheultimatepokedex.xyz)
[![lines of code](https://img.shields.io/tokei/lines/github/jorovernier/ultimate-pokedex?color=ff69b4)](https://img.shields.io/tokei/lines/github/jorovernier/ultimate-pokedex?color=ff69b4)
[![repo size](https://img.shields.io/github/repo-size/jorovernier/ultimate-pokedex?color=blueviolet)](https://img.shields.io/github/repo-size/jorovernier/ultimate-pokedex?color=blueviolet)

## Front-End

**Dependencies**
- axios
- redux
- react-redux
- react-router-dom
- http-proxy-middleware
- redux-promise-middleware
- node-sass
- chart.js

**File Structure**
- src/
    - components/
        - regions/
            - AlolaDex.js
            - GalarDex.js
            - HoennDex.js
            - JohtoDex.js
            - KalosDex.js
            - KantoDex.js
            - SinnohDex.js
            - UnovaDex.js
        - AuthComponent.js
        - Chart.js
        - FoundDisplay.js
        - FoundItem.js
        - FoundMove.js
        - Home.js
        - Item.js
        - ItemDex.js
        - Move.js
        - MoveDex.js
        - Pokedex.js
        - Pokemon.js
        - Profile.js
        - SearchByMove.js
        - TeamPokemon.js
        - Types.js
    - psyducks/
        - reducer.js
        - store.js
    - sass-css/
        - App.scss
        - Auth.scss
        - Dex.scss
        - FoundDisplay.scss
        - FoundItem.scss
        - FoundMove.js
        - Home.js
        - Item.scss
        - ItemDex.scss
        - Move.scss
        - MoveDex.scss
        - Pokemon.scss
        - Profile.scss
        - SearchByMove.scss
        - TeamPokemon.scss
        - Types.scss
        - var-mix-ext.scss
    - App.js
    - App.test.js
    - index.css => reset.css
    - index.js
    - serviceWorker.js
    - setupProxy.js

**Routes**
- Home => '/' => Home.js
- Login/Register => '/login-register' => AuthComponent.js
- Profile => '/profile' => Profile.js
- Pokedex => '/pokedex' => Pokedex.js
- Kanto => '/pokedex-kanto' => KantoDex.js
- Johto => '/pokedex-johto' => JohtoDex.js
- Hoenn => '/pokedex-hoenn' => HoennDex.js
- Sinnoh => '/pokedex-sinnoh' => SinnohDex.js
- Unova => '/pokedex-unova' => UnovaDex.js
- Kalos => '/pokedex-kalos' => KalosDex.js
- Alola => '/pokedex-alola' => AlolaDex.js
- Galar => '/pokedex-galar' => GalarDex.js
- Items => '/itemdex' => ItemDex.js
- Moves => '/movedex' => MoveDex.js
- Move-Search => '/search-by-move' => SearchByMove.js
- Types => '/types/ => Types.js

#
## Back-End

**Dependencies**
- express
- massive
- dotenv
- express-session
- bcrypt

**Server File Structure**
- db/
    - add_to_team.sql (1-6)
    - change_name.sql (1-6)
    - create_user.sql
    - edit_profile_pic.sql
    - find_user.sql
    - get_team.sql
    - init.sql
    - remove_from_team.sql (1-6)
- server/
    - controllers/
        - teamController.js
        - userController.js
    - index.js

**Endpoints**
- User Controller
    - register => post => /auth/register
    - login => post => /auth/login
    - logout => delete => /auth/logout
    - userSession => get => /auth/session
    - editPic => put => /api/edit_profile_pic

- Team Control
    - getTeam => get => /api/get_team
    - addToTeam(1-6) => post => /api/add_to_team
    - removeFromTeam(1-6) => post => /api/remove_from_team
    - changeName => put => /api/change_name/:slot

<!-- 
#
## Database

**Tables**

- User
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    img_url TEXT
);
```

- Pokemon Team
```sql
CREATE TABLE team (
    team_id SERIAL PRIMARY KEY,
    p1 INTEGER,
    p1_name VARCHAR(12),
    p2 INTEGER,
    p2_name VARCHAR(12),
    p3 INTEGER,
    p3_name VARCHAR(12),
    p4 INTEGER,
    p4_name VARCHAR(12),
    p5 INTEGER,
    p5_name VARCHAR(12),
    p6 INTEGER,
    p6_name VARCHAR(12),
    user_id INTEGER REFERENCES users(user_id)
);
``` -->