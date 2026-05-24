class Order {
  constructor(orderId, customerName, orderDetails) {
    this.orderId = orderId
    this.customerName = customerName
    this.orderDetails = orderDetails
    this.createdAt = new Date().toISOString()
  }
}

module.exports = Order