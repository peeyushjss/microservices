const express = require('express');
const app = express();
const port = 3002;

app.get('/listOrders', (req, res) => {
    let response = {
        data: {
            items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' },]
        }
    }
    res.status(200).json(response);
})

app.listen(port, () => {
    console.log(`Orders microservice are running on: http://localhost:${port}`);
})
