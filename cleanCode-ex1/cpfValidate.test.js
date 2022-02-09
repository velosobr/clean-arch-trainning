const cpfValidator = require('./cpfValidate')

test("Deve calcular a validade de um cpf fornecido", function() {

   //Given arrange
   const cpf = "08960826952"
   //When act
   const cpfValidate = cpfValidator.validate(cpf)
   //then assert
})