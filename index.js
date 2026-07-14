import { connect } from "framer-api";

const PROJECT =
"https://framer.com/projects/MuseoPedrodeOsmav2--hRs7p0fzktqHcmC7AEU3";

const framer = await connect(
    PROJECT,
    process.env.FRAMER_API_KEY
);

// 1. Traer todas las colecciones CMS
const collections = await framer.getCollections();

console.log(collections);


// 2. Buscar la colección Agenda
const agenda = collections.find(
    c => c.name === "Agenda"
);


// 3. Mostrar qué encontró
console.log(agenda);
