const express = require('express');
import uniqid from uniqid;
import fs from 'fs';
import cors from 'cors';
import {GPTScript} from "@gptscript-ai/gptscript"

const app = express();
app.use(cors());

app.get('/test', (req, res) => {
    return res.json('okkkkkkk');
});


app.get('/create-story',(req,res)=> {

    const url= req.query.url;
    const dir = uniqid();
    const path = './stories/'+dir;

    fs.mkdirSync(path, {recursive:true});



    console.log({
        url
    });
    return res.json(req.url);
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
