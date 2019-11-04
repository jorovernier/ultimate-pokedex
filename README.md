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

**File Structure**
- src/
    - components/
        - AuthComponent.js
        - Pokedex.js
        - Pokemon.js
        - Profile.js
    - psyducks/
        - store.js
        - reducer.js
    - App.css
    - App.js
    - App.test.js
    - index.css => reset.css
    - index.js
    - serviceWorker.js
    - setupProxy.js

**Axios Requests**
- getAllPokemon => get => `http://pokeapi.co/api/v2/pokemon?limit=807`
- getPokemonByName => get => `http://pokeapi.co/api/v2/pokemon/${name}`

**Routes**
- Login/Register => '/' => AuthComponent.js
- Profile => '/profile' => Profile.js
- Pokedex => '/pokedex' => Pokedex.js
- Kanto => '/pokedex-kanto' => Pokedex.js
- Johto => '/pokedex-johto' => Pokedex.js
- Hoenn => '/pokedex-hoenn' => Pokedex.js
- Sinnoh => '/pokedex-sinnoh' => Pokedex.js
- Unova => '/pokedex-unova' => Pokedex.js
- Kalos => '/pokedex-kalos' => Pokedex.js
- Alola => '/pokedex-alola' => Pokedex.js
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
- server/
    - index.js
    - controllers/
        - userController.js

**Endpoints**
- User Controller
    - userSession => get => /auth/session
    - register => post => /auth/register
    - login => post => /auth/login
    - logout => delete => /auth/logout

- Team Control
    - addToTeam => post => /api/add_to_team
    - removeFromTeam => delete => /api/remove_from_team/:id?

#
## Database

**Tables**

- User
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
```

- Pokemon Team
```sql
CREATE TABLE team (
    team_id SERIAL PRIMARY KEY,
    p1 INTEGER NOT NULL,
    p2 INTEGER NOT NULL,
    p3 INTEGER NOT NULL,
    p4 INTEGER NOT NULL,
    p5 INTEGER NOT NULL,
    p6 INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(user_id)
);
```