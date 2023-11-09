import FilmeRepositorioInterface from "./filme-repositorio-interface"
import ListarFilme from "./listar-filme.use-case.test"
export default class ListarFilme{
    
    constructor(private filmeRepositorio:FilmeRepositorioInterface){}
    public async execute():Promise<FilmeODT[]>{
        return this.filmeRepositorio.listar()
    }
}



type Input = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}
type Output = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}