import Coupon from "../src/Coupon"

test("deve Criar um cupom de desconto", function(){
   const coupon = new Coupon("VALE20", 20)
   expect(coupon.discountValue).toBe(20)
})
