import { Request, Response } from "npm:express@4.18.2";
import { TardisModel } from "../db/tardis.ts";

const updateTardis = async (req: Request, res: Response) => {
    try{
        const { dimensiones, planetas, personas, camuflajeActual, numeroRegeneracion, year } = req.body;
        if( !dimensiones || !planetas || !personas || !camuflajeActual || !numeroRegeneracion || !year){
            res.status(400).send("Falta(n) valor(es) en el json");
            return;           
        }

        const updatedTardis = await TardisModel.findOneAndUpdate(
            { dimensiones, planetas, personas, camuflajeActual, numeroRegeneracion, year },
            { new: true}
        ).exec();

        if(!updatedTardis){
            res.status(404).send("tardis no encontrada");
            return;
        }

        res.status(200).send({
            dimensiones: updatedTardis.dimensiones,
            planetas: updatedTardis.planetas,
            personas: updatedTardis.personas,
            camuflajeActual: updatedTardis.camuflajeActual,
            numeroRegeneracion: updatedTardis.numeroRegeneracion,
            year: updatedTardis.year,
            id: updatedTardis._id.toString(),

        });
    }catch(error) {
        res.status(500).send(error.message);
        return;
    }
};

export default updateTardis;