import { Request, Response } from "npm:express@4.18.2";
import { TardisModel } from "../db/tardis.ts";

export const addTardis =async (req: Request, res: Response) => {
    try{
        const { dimensiones, planetas, personas, camuflajeActual, numeroRegeneracion, year } = req.body;
        if( !dimensiones || !planetas || !personas || !camuflajeActual || !numeroRegeneracion || !year){
            res.status(400).send("Falta(n) valor(es) en el json");
            return;           
        }

   

const newTardis = new TardisModel({
    dimensiones,
    planetas,
    personas,
    camuflajeActual,
    numeroRegeneracion,
    year,
});

await newTardis.save();

res.status(200).send({
    dimensiones: newTardis.dimensiones,
    planetas: newTardis.planetas,
    personas: newTardis.personas,
    camuflajeActual: newTardis.camuflajeActual,
    numeroRegeneracion: newTardis.numeroRegeneracion,
    year: newTardis.year,
    id: newTardis._id.toString(),
});
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};