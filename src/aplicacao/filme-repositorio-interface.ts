export default interface FilmeRepositorioInterface {
    salvar(filme: FilmeDTO): boolean;
}
type FilmeDTO = {
    id: number,
    titulo: string,
    descricao: string,
    foto: string
}