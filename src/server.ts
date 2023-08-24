import express, { Request, Response } from 'express';

const PORT = 8080;
const app = express();
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send({ name: "Jhon Doe" })
})

app.listen(PORT, () => {
    console.log("APP RUNNING: http://127.0.0.1:", + PORT)
});