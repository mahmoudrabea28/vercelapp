import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! from Vercel and TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app; //for vercel