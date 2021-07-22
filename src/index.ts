import express, { Application, Request, Response, Router } from 'express';
const app:Application = express();
const router: Router = express.Router();
import {sendingEmail} from "./SendingEmail";
import {senderEmail, userEmail, confirmMessage, htmlMessage, secondMessage} from "./email";

const port = 3114;
router.get('/', (req: Request, res: Response): void => {
    res.send('Hello, World');
});


app.get('/email',(req,res,next)=>{
    sendingEmail(userEmail,senderEmail,confirmMessage).catch(console.error)
    res.send('boom')
    sendingEmail(senderEmail,userEmail,secondMessage).catch(console.error)
});

app.use(router);
console.log(`server is running in http://localhost:${port}`);
app.listen(port);


sendingEmail(senderEmail,userEmail,htmlMessage).catch(console.error);
