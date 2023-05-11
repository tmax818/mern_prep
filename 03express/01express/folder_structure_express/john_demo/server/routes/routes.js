const users = require('../../users')

module.exports = (app) => {

 
    //! CREATE
    app.post("/api/users", (req, res) => {
        console.log(req.body)
        users.push(req.body)
        res.json({status: 'ok'})
    })
    //!  READ ALL
    app.get("/api/users", (req, res) => {
        res.json( users );
    });

    //! READ ONE
    app.get('/api/users/:id', (req, res) => {
        console.log(req.params.id)
        res.json(users[req.params.id])
    })

    //! UPDATE
    app.put('/api/users/:id', (req, res) =>{
        users[req.params.id] = req.body
        res.json({status: 'ok'})
    })

    //! DELETE
    app.delete('/api/users/:id', (req, res) => {
        users.splice(req.params.id, 1);
        res.json({status: 'ok'})
    })


}