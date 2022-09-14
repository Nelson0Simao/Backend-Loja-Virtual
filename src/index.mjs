import { config } from 'dotenv'; 
config();
import app from './custom/expressConfig.mjs';
import connect from './database/connect.mjs';
import router from './routes/routes.mjs';
import createTableUsers from './database/UsersTables.mjs';
const LPORT = process.env.LPORT;
import assert from 'assert'
connect.then(
    async(response)=>{
    app.use(router);
    await createTableUsers();
    app.use((req, res)=>{
        res.status(404).json({error: "router not exists"})
    });
    app.listen(LPORT, console.log.bind(console, "Server at running ", LPORT))
    },
    async(reject)=>{
        console.log(`Database not connected ${reject}`);
    }
)

