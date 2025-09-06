// registrants model

import mongoose, { Document } from "mongoose";

interface IRegistrant extends Document {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    reason?: string
}

const RegistrantSchema = new mongoose.Schema<IRegistrant>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: false
    }
},{timestamps: true})
    
const Registrant = mongoose.model<IRegistrant>("Registrant", RegistrantSchema)

export default Registrant
