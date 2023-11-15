import mongoose from "npm:mongoose@8.0.0";
import { Tardis } from "../types.ts";
import { PersonaModel } from "./persona.ts";
import { PlanetaModel } from "./planeta.ts";


const Schema = mongoose.Schema;

export type TardisModelType = mongoose.Document & Omit<Tardis, "id">;

const TardisSchema = new Schema(
    {
        dimensiones: { type: Schema.Types.ObjectId, ref: 'Dimension', required: true }, // Referencia a la dimensión
        planetas: [{ type: Schema.Types.ObjectId, ref: 'Planeta', required: true }], // Array de referencias a planetas visitados por la TARDIS
        personas: [{ type: Schema.Types.ObjectId, ref: 'Persona', required: true }], // Array de referencias a personas relevantes para la TARDIS
        camuflajeActual: {type: String, required: true},
        numeroRegeneracion: {type: String, requied: true},
        year: {type: Number, required: true},
    });

export const TardisModel = mongoose.model<TardisModelType>(
    "Tardis",
    TardisSchema
  );