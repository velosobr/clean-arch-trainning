import Cpf from "../src/Cpf"

test("Deve testar um cpf válido", function () {
   const cpf = new Cpf("089.608.269-52")
   expect(cpf.getValue()).toBe("089.608.269-52")
})