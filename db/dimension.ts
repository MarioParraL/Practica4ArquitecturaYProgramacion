import mongoose from "npm:mongoose@8.0.0";
import { Dimension } from "../types.ts";
import { PlanetaModel } from "./planeta.ts";

const Schema = mongoose.Schema;

export type DimensionModelType = mongoose.Document & Omit<Dimension, "id">;

const DimensionSchema = new Schema(
    {
        planetas: [{ type: Schema.Types.ObjectId, ref: 'Planeta' }] 
    });

    export const DimensionModel = mongoose.model<DimensionModelType>(
        "Dimension",
        DimensionSchema
      );