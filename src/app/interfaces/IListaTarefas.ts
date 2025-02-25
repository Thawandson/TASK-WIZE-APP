export interface IListaTarefas{
    id?: string;    
    idUsuario: string;
    tituloTarefa:string;
    dataInicio:string;
    dataFInal?:string;
    status:string;
    descricao: string; 
}