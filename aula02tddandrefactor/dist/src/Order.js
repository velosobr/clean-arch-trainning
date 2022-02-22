"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./Cpf"));
class Order {
    constructor(cpf) {
        this.cpf = new Cpf_1.default(cpf);
    }
    getTotal() {
        return 0;
    }
}
exports.default = Order;
