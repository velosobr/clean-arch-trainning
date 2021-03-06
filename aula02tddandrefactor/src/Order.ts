import Cpf from "./Cpf";
import Coupon from "./Coupon";
import Item from "./Item";
import OrderItem from "./OrderItem";
import Freight from "./Freight";

export default class Order{
   cpf: Cpf
   coupon: Coupon | undefined
   orderItems: OrderItem[]
   freight: Freight


   constructor(cpf: string, readonly issueDate: Date = new Date()){
      this.cpf = new Cpf(cpf)
      this.orderItems = []
      this.freight = new Freight()
   }

   addItem(item: Item, quantity: number){
      this.freight.addItem(item, quantity)
      this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
   }

   addCoupon(coupon: Coupon){
      if(!coupon.isExpired(this.issueDate)){
         this.coupon = coupon
      }
      
   }
   getTotal() {
      let total = 0
      for(const orderItem of this.orderItems) {
         total += orderItem.getTotal()
      }
      if (this.coupon) {
         total -= this.coupon.calculateDiscount(total)      
      }

      total += this.freight.getTotal()
      return total
   }
}