export function meuDecoratorDeClasse() {
  return function (constructor: any) {
    const original = constructor
    const novo: any = function (...args: any[]) {
      console.log("Criando uma instância com New: " + original.name)
      return new original(...args)
    }
    novo.prototype = original.prototype

    return novo
  }
}