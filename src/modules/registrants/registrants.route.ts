// registrants routes

import Router from "express"
import { addRegistrant, getAllRegistrants } from "./registrants.controller"
import { authenticateUser } from "@modules/auth/auth.middleware"

const registrantRouter = Router()

registrantRouter.post("/", addRegistrant)
registrantRouter.get("/", authenticateUser, getAllRegistrants)

export default registrantRouter