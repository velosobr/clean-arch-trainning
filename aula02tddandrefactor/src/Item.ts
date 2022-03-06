import Dimension from "./Dimension";

export default class Item{
   dimension: Dimension | undefined
   constructor(
      readonly idItem: number, 
      readonly category: string, 
      readonly description: string, 
      readonly price: number,
      readonly width?: number,
      readonly height?: number,
      readonly length?: number
      ){
         if (width && height && length) {
            this.dimension = new Dimension(width, height, length)
         }
      }

      getVolume(){
         if (this.dimension) return this.dimension.getVolume()
      }
}