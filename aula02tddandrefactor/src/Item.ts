export default class Item{
   constructor(
      readonly idItem: number, 
      readonly category: string, 
      readonly description: string, 
      readonly price: number,
      readonly weight?: number,
      readonly height?: number,
      readonly width?: number,
      readonly depth?: number
      ){}
}