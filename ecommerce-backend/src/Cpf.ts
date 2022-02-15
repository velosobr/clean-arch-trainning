export default class Cpf{
   private FACTOR_DIGIT_1 = 10
   private FACTOR_DIGIT_2 = 11
   
   private value: string;

   constructor(value: string) {
      this.value = value;
   }

   getValue(): string {
      return this.value;
   }
   validate(cpf: string){
      if(!cpf) return false
      cpf = this.cleanCpf(cpf)
   }

   private cleanCpf(cpf: string){
      
   }
}