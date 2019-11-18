# Ultimate Pokedex

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
        - Home.js
        - Item.js
        - ItemDex.js
        - Pokedex.js
        - Pokemon.js
        - Profile.js
        - TeamPokemon.js
    - psyducks/
        - reducer.js
        - store.js
    - sass-css/
        - App.scss
        - Auth.scss
        - Dex.scss
        - FoundDisplay.scss
        - FoundItem.scss
        - Home.js
        - Item.scss
        - ItemDex.scss
        - Pokemon.scss
        - Profile.scss
        - TeamPokemon.scss
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
- Items => '/itemdex' => ItemDex.js
<!-- - Galar => '/pokedex' => Pokedex.js -->

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
```