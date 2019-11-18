module.exports = {
    getTeam: async (req,res,next) => {
        const db = await req.app.get('db');
        const {user_id} = req.session.user;
        db.get_team(user_id).then(team => {
            res.status(200).send(team)
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam1: (req,res,next) => {
        const db = req.app.get('db');
        const {p1} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team1(p1, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam2: (req,res,next) => {
        const db = req.app.get('db');
        const {p2} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team2(p2, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam3: (req,res,next) => {
        const db = req.app.get('db');
        const {p3} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team3(p3, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam4: (req,res,next) => {
        const db = req.app.get('db');
        const {p4} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team4(p4, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam5: (req,res,next) => {
        const db = req.app.get('db');
        const {p5} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team5(p5, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam6: (req,res,next) => {
        const db = req.app.get('db');
        const {p6} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team6(p6, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam1: (req,res,next) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.add_to_team1(user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam2: (req,res,next) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.add_to_team2(user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam3: (req,res,next) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.add_to_team3(user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam4: (req,res,next) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.add_to_team4(user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam5: (req,res,next) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.add_to_team5(user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam6: (req,res,next) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.add_to_team6(user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    changeName: (req,res,next) => {
        const db = req.app.get('db');
        const {slot} = req.params;
        const {name} = req.body;
        const {user_id} = req.session.user;
        let nameSQL;
        if(slot === 'p1_name'){
            nameSQL = db.change_name1
        } else if(slot === 'p2_name'){
            nameSQL = db.change_name2
        } else if(slot === 'p3_name'){
            nameSQL = db.change_name3
        } else if(slot === 'p4_name'){
            nameSQL = db.change_name4
        } else if(slot === 'p5_name'){
            nameSQL = db.change_name5
        } else if(slot === 'p6_name'){
            nameSQL = db.change_name6
        }
        nameSQL(name, user_id).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    }
}