import { Request, Response } from "npm:express@4.18.2";
import { TardisModel } from "../db/tardis.ts";

export const getAllTardis = async (req: Request, res: Response) => {
    try{
        const tardis = await TardisModel.find();
        res.status(200).send(
            tardis.map((tardis)=>({
                dimensiones: tardis.dimensiones,
                planetas: tardis.planetas,
                personas: tardis.personas,
                numeroRegeneracion: tardis.numeroRegeneracion,
                year: tardis.year,
            }))
        );
    }catch(error) {
        res.status(500).send(error.message);
    }
};

export default getAllTardis;