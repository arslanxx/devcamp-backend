import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

console.log(process.env.PORT);
const port = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});