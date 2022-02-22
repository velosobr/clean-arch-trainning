"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("../src/Cpf"));
test("Deve testar um CPF válido", function () {
    const cpf = new Cpf_1.default("089.608.269-52");
    expect(cpf.getValue()).toBe("089.608.269-52");
});
const invalidCpfWithSameDigit = [
    "111.111.111-11",
    "222.222.222-22"
];
describe.each(invalidCpfWithSameDigit)("Deve testar um cpf inválido com digitos iguais", function (cpf) {
    test(`${cpf}`, function () {
        expect(() => new Cpf_1.default(cpf)).toThrow(new Error("CPF inválido"));
    });
});
