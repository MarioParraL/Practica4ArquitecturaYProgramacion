export type Tardis = {
id: string;
dimensiones: Dimension[];
planetas: Planeta[];
personas: Persona[];
camuflajeActual: string;
numeroRegeneracion: number;
year: number;
}


export type Persona = {
    id: string;
    name: string;
    age: number;
    nationality: string;
    country: string;
}

export type Planeta = {
    id: string;
    name: string,
    personas: Persona[];
}

export type Dimension = {
    id: string;
    planetas: Planeta[];
}