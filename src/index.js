// importação da função
import moment from "moment"

// Retorna um objeto com a data atual ou equivalente ao parâmetro passado na função
const dataAtual = moment("1989-10-15") // retorna um objeto
console.log(dataAtual)
// outros exemplos moment("19891015", "YYYYMMDD") || moment("15101989", "DDMMYYYY")


// Formatação de datas
const dataAtualFormatada = moment().format("DD/MM/YYYY HH:mm:ss") // retorna uma string
console.log(dataAtualFormatada)
// outro exemplo de formatação - .format("YYYY-MM-DD")


// Suporta várias localidades
moment.locale("pt-br") // define a localidade
const localidadeAtual = moment().format('LLLL') // define o tipo de formatação
console.log(localidadeAtual)
// outro exemplo de formatação - moment().format('llll')


// Tempo relativo
const dataPassada = moment("20111031", "YYYYMMDD").fromNow()
console.log(dataPassada)

const dataFutura = moment("20251031", "YYYYMMDD").fromNow()
console.log(dataFutura)

const hoje = moment()
const anoNovo = moment("01-01-2024", "DDMMYYYY")
console.log(anoNovo.diff(hoje, "days")) 