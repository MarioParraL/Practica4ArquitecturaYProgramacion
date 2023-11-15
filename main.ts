import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@8.0.0";
import { addTardis } from "./resolvers/addTardis.ts";
import { getAllTardis } from "./resolvers/getTardis.ts";
import deleteTardis from "./resolvers/deleteTardis.ts";
import updateTardis from "./resolvers/updateTardis.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";


const env = await load();
const MONGO_URL=env.MONGO_URL||Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
    throw new Error("Please provide a MONGO_URL");
    Deno.exit(-1);
  }


  await mongoose.connect(MONGO_URL);
  const app = express();
  app.use(express.json());


  app
  .post("/api/tardis", addTardis)
  .delete("/api/tardis/:id", deleteTardis)
  .get("/api/tardis", getAllTardis)
  .put("/api/tardis/:id", updateTardis)
  

  app.listen(3000, () => {
    console.info("Server started on port 3000");
  });




