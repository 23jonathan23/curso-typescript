import { Imprimivel } from '../models/index'

export function formateDate(date: Date): string {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export function imprime(...objeto: Imprimivel[]) {
  objeto.forEach(objeto => objeto.paraTexto())
}