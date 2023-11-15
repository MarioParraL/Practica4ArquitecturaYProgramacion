import { Request, Response } from "npm:express@4.18.2";
import { TardisModel } from "../db/tardis.ts";

const deleteTardis = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const tardis = await TardisModel.findByIdAndDelete(_id);
        if(!tardis){
            res.status(404).send("Tardis no encontrada");
            return;
        }
        res.status(200).send("Tardis eliminada");
    }catch(error) {
        res.status(404).send(error.message);
        return;
    }
};

export default deleteTardis;