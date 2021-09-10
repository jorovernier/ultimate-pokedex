module.exports = {
    getTeam: async (req,res,next) => {
        const db = await req.app.get('db');
        const {user_id} = req.session.user;
        db.get_team(user_id).then(team => {
            res.status(200).send(team)
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addToTeam: (req,res,next) => {
        const db = req.app.get('db');
        const {p, slot} = req.body;
        const {user_id} = req.session.user;
        db.add_to_team(p, user_id, slot).then(pokemon => {
            res.status(200).send(pokemon);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    removeFromTeam: (req,res,next) => {
        const db = req.app.get('db');
        const {slot} = req.body;
        const {user_id} = req.session.user;
        let nameSQL;
        if(slot === 'p1_name'){
            nameSQL = db.remove_from_team1
        } else if(slot === 'p2_name'){
            nameSQL = db.remove_from_team2
        } else if(slot === 'p3_name'){
            nameSQL = db.remove_from_team3
        } else if(slot === 'p4_name'){
            nameSQL = db.remove_from_team4
        } else if(slot === 'p5_name'){
            nameSQL = db.remove_from_team5
        } else if(slot === 'p6_name'){
            nameSQL = db.remove_from_team6
        }
        nameSQL(user_id).then(pokemon => {
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