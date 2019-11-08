require('dotenv').config();
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;
const express = require('express');
const app = express();
app.use(express.json());
const massive = require('massive');
const session = require('express-session');
const {register, login, logout, userSession, editPic} = require('./controllers/userController');
const {addToTeam1, addToTeam2, addToTeam3, addToTeam4, addToTeam5, addToTeam6, getTeam} = require('./controllers/teamController');

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

massive(CONNECTION_STRING).then(db => {
    console.log('Database connected!');
    db.init().then(() => {
        app.set('db', db);
    });
}).catch(err => console.log(err));

app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/user_session', userSession);
app.delete('/auth/logout', logout);
app.put('/api/edit_profile_pic', editPic);

app.post('/api/add_to_team1', addToTeam1);
app.post('/api/add_to_team2', addToTeam2);
app.post('/api/add_to_team3', addToTeam3);
app.post('/api/add_to_team4', addToTeam4);
app.post('/api/add_to_team5', addToTeam5);
app.post('/api/add_to_team6', addToTeam6);
app.get('/api/get_team', getTeam);

let port = SERVER_PORT || 6000;
app.listen(port, () => console.log(`Listening on port ${port}.`));