import {describe, test , expect} from 'vitest'
import SalvaFilme from './salva-filme.use-case'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'
describe("Testando usecase de salvar filme",()=>{
    test("Deve salvar um filme",async ()=>{
        //Entrada
        const filme = {
            id:1,
            titulo:"test",
            sinopse:"test",
            foto:"test"
        }
        //Processamento]
        const bancoEmMemoria = new BancoEmMemoria()
        const salvaFilme = new SalvaFilme(bancoEmMemoria)
        const {id, titulo, sinopse, foto} = filme
        const resultado = await salvaFilme.execute({id,titulo,sinopse,foto})
        //Resultado
        expect(resultado).toEqual(filme)
    })
})