// registrants controller

import { validateRequestBody } from "@utils/validation/validateRequest";
import { Request, Response } from "express";
import Registrant from "./registrants.model";
import { sendSuccess } from "@utils/sendSuccess";
import { sendError } from "@utils/sendError";

export const addRegistrant = async (req:Request, res:Response) => {
       try {
          const safeData = validateRequestBody("creation","registrant",req)

          const registrant = await Registrant.create(safeData)

          sendSuccess(200,"Registrant added successfully",registrant,res)
          
       }catch(err) {
           sendError(500,"Registrant addition failed",err,res)     
    }
}

export const getAllRegistrants = async (req:Request, res:Response) => {
    try {
       const registrants = await Registrant.find().sort({createdAt: -1})

       sendSuccess(200,"Registrants fetched successfully",registrants,res)
    }catch(err) {
        sendError(500,"Failed to fetch registrants",err,res)     
 }
}