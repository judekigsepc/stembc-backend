// registrants validation schema

import { z } from "zod";

export const registrantSchema = z.object({
    firstName: z.string({message: "First name is required"}).min(1, {message: "First name cannot be empty"}),
    lastName: z.string({message: "Last name is required"}).min(1, {message: "Last name cannot be empty"}),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string({message: "Phone number is required"}).min(10, {message: "Phone number must be at least 10 characters long" }),
    reason: z.string().optional(),
})