import { Status } from "./Status"
import { Usuario } from "./Usuario"

export class Tarefas{
    public idtarefa: number
    public titulotarefa: string
    public descriçãotarefa: string
    public prazoconclusao: Date
    public datapostagem: Date
    public status: Status
    public usuario: Usuario
}