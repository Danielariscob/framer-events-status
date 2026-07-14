import { connect } from "framer-api";

const PROJECT =
"https://framer.com/projects/MuseoPedrodeOsmav2--hRs7p0fzktqHcmC7AEU3";

const framer = await connect(
    PROJECT,
    process.env.FRAMER_API_KEY
);

const collections = await framer.getCollections();

const agenda = collections.find(c => c.name === "Agenda");

const fields = await agenda.getFields();
const items = await agenda.getItems();

// buscar IDs de Fecha y Estado

// recorrer items

// actualizar

// publicar

await framer.publish();

framer.disconnect();
