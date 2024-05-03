import express from 'express';
import { name } from '@repo/common/config';
console.log(name);
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "hello"
    })
})

app.listen(3000);