import mongoose from "npm:mongoose@8.0.0";
import { Persona } from "../types.ts";

const Schema = mongoose.Schema;

export type PersonaModelType = mongoose.Document & Omit<Persona, "id">;

const PersonaSchema = new Schema(
    {
        name: {type: String, required:true},
        age: {type: Number, required: true},       
        nationality: {type: String, required: true},
        country: {type: String, requied: true},       
    });

    export const PersonaModel = mongoose.model<PersonaModelType>(
        "Persona",
        PersonaSchema
      );