
  
  import express, { Request, Response } from 'express';
  import cors from 'cors';
  import cookieParser from 'cookie-parser';
  import connectToDB from '@configs/db'
  import checkEnvVars from '@utils/checkEnv'

  import authRouter from '@modules/auth/auth.route';
import registrantRouter from '@modules/registrants/registrants.route';


const envVars = ["PORT","DB_URI","JWT_SECRET","CORS_ORIGINS"]
// Checking for presence of all env variables
checkEnvVars(envVars)

const app = express();

const allowedOrigins = process.env.CORS_ORIGINS as unknown as string[]

app.use(cors({
origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}))

app.use(express.json());
app.use(cookieParser())


const port = process.env.PORT || 3000
const dbURL = process.env.DB_URI as string

//Connecting to database
connectToDB(dbURL)

app.listen(port, () => {
 console.log(`Server running on port ${port}`)
})

app.get('/', (req:Request, res:Response) => {
res.send('Server up and running')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/registrants', registrantRouter)
