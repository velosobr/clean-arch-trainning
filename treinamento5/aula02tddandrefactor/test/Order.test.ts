import Coupon from "../src/Coupon";
import Dimension from "../src/Dimension";
import Freight from "../src/Freight";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido", function(){
    const order = new Order("089.608.269-52");
    expect(order.cpf.getValue()).toBe("089.608.269-52")
    expect(order.getTotal()).toBe(0)
});

test("Não deve criar um pedido com CPF inválido", function(){
    expect(()=> new Order("111.111.111-11")).toThrow(new Error("CPF inválido"))
});


test("Deve fazer um pedido com 3 items", function(){
    const order = new Order("089.608.269-52");
    
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Acessórios", "Cabo", 30), 3)

    const total = order.getTotal()
    expect(total).toBe(6090)
})

test("Deve criar um pedido com 3 items com cupom de desconto", function(){
    const order = new Order("089.608.269-52");
    
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Acessórios", "Cabo", 30), 3)

    const coupon = new Coupon("VALE20", 20)
    order.addCoupon(coupon)
    const total = order.getTotal()
    expect(total).toBe(4872)
})

test("Deve criar um pedido com 3 items com cupom de desconto expirado", function(){
    const order = new Order("089.608.269-52", new Date("2022-03-01T10:00:00"));
    
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Acessórios", "Cabo", 30), 3)

    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"))
    order.addCoupon(coupon)
    const total = order.getTotal()
    expect(total).toBe(6090)
})

test("Deve fazer um pedido com 3 items e calcular o frete", function(){
    const order = new Order("089.608.269-52");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 30), 3), 1)
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1)
    order.addItem(new Item(3, "Acessórios", "Cabo", 30, new Dimension(10, 10, 10), 1), 3)
    const total = order.getTotal()
    expect(total).toBe(6350)
})

test("Deve fazer um pedido com 3 items e calcular o minimo", function(){
    const order = new Order("089.608.269-52");
    order.addItem(new Item(3, "Acessórios", "Cabo", 30, new Dimension(10, 10, 10), 0.9), 1)
    const total = order.getTotal()
    expect(total).toBe(40)
})