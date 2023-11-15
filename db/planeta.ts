import mongoose from "npm:mongoose@8.0.0";
import { Planeta } from "../types.ts";
import { PersonaModel } from "./persona.ts";

const Schema = mongoose.Schema;

export type PlanetaModelType = mongoose.Document & Omit<Planeta, "id">;

const PlanetaSchema = new Schema(
    {
        name: {type: String, required:true},
        personas: [{ type: Schema.Types.ObjectId, ref: 'Persona' }] 
        
    });

    export const PlanetaModel = mongoose.model<PlanetaModelType>(
        "Persona",
        PlanetaSchema
      );