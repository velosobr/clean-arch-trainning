"use strict";
const cpfValidator = require('./ValidarCpf');
test("Deve calcular a validade de um cpf fornecido", function () {
    //Given arrange
    const cpf = "08960826952";
    //When act
    const cpfValidated = cpfValidator.ValidarCpf.cpf(cpf);
    //then assert
    expect(cpfValidated).toBe(true);
});
