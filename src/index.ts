import express, { Application, Request, Response, Router } from 'express';
const app:Application = express();
const router: Router = express.Router();
import {sendEmail} from "./SendEmail";

const port = 3114;
router.get('/', (req: Request, res: Response): void => {
    res.send('Hello, World');
});
app.get('/email',(req,res,next)=>{
    res.send('boom')
    sendEmail('2z').catch(console.error)
})
app.use(router);
console.log(`server is running in http://localhost:${port}`);
app.listen(port);
sendEmail('1').catch(console.error);