const Cpf = require('../src/Cpf');

const invalidCpfWithSameDigit = [
   "089.608.269-52",
   "111.111.111-11",
   "222.222.222-22"
]
test("Deve testar um cpf válido", function () {
   //given
   const cpf = "089.608.269-52"
   //when
   const isValid = Cpf.validate(cpf)
   expect(isValid).toBeTruthy()
})

describe.each(invalidCpfWithSameDigit)("Deve testar um cpf inválido com digitos iguais",function(cpf){
   test(`${cpf}`, function () {
      const isValid = Cpf.validate(cpf)
      expect(isValid).toBeFalsy()
   })   
})

test("Deve testar um cpf inválido com digitos diferentes", function () {
   const cpf = "123.456.789-12"
   const isValid = Cpf.validate(cpf)
   expect(isValid).toBeFalsy()
})
