test("Deve criar um pedido", function(){
    const order = new Order("089.608.269-52");
    expect(order.getTotal()).toBe(0)
});