const express = require('express');
const app = express();
const port = 3001;

app.get('/listUsers', (req, res) => {
    // console.log(req.headers['x-forwarded-host'] !== 'localhost:3000');
    let response = {
        data: {
            users: [{ id: 1, name: 'Peeyush' }, { id: 2, name: 'Zaki' }, { id: 3, name: 'Naresh' }, { id: 4, name: 'Madhavi' },]
        }
    }
    res.status(200).json(response);
})

app.listen(port, () => {
    console.log(`Users microservice are running on: http://localhost:${port}`);
})
