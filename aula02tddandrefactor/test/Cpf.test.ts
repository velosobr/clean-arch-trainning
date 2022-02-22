import Cpf from "../src/Cpf"

test("Deve testar um CPF válido", function(){
const cpf = new Cpf("089.608.269-52")
expect(cpf.getValue()).toBe("089.608.269-52")
})

const invalidCpfWithSameDigit = [
   "111.111.111-11",
   "222.222.222-22"
]
describe.each(invalidCpfWithSameDigit)("Deve testar um cpf inválido com digitos iguais",function(cpf){
   test(`${cpf}`, function () {
      expect(() => new Cpf(cpf)).toThrow(new Error("CPF inválido"))
   })   
})
