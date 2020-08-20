import { NegociacaoController } from './controllers/NegociacaoController'

const controller = new NegociacaoController()
$('.form').submit(controller.adicionar)
$('#botao-importa').click(controller.importaDados)
