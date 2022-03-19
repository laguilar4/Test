export interface createlist{
    descripcion: string,
    persona: string,
    fechavenc: Date
}

export interface getlist{
    _id: string,
    descripcion: string,
    persona: string,
    fechavenc: Date, 
    terminada: string
}