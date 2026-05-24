const Order = require('./order')

class Node {
  constructor(order) {
    this.order = order
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  // Add a new order to the end of the list
  append(order) {
    const newNode = new Node(order)

    // If list is empty, new node becomes the head
    if (!this.head) {
      this.head = newNode
      return
    }

    // Otherwise walk to the end and attach
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }

  // Print all orders from head to tail
  display() {
    if (!this.head) {
      console.log('No orders in the list.')
      return
    }

    let current = this.head
    let position = 1
    while (current) {
      console.log(
        `[${position}] Order ID: ${current.order.orderId} | ` +
        `Customer: ${current.order.customerName} | ` +
        `Details: ${current.order.orderDetails} | ` +
        `Created: ${current.order.createdAt}`
      )
      current = current.next
      position++
    }
  }

  // Reverse the linked list in place — O(n) time, O(1) space
  reverse() {
    let prev = null
    let current = this.head

    while (current) {
      const next = current.next  // save next before we overwrite it
      current.next = prev        // flip the arrow
      prev = current             // move prev forward
      current = next             // move current forward
    }

    this.head = prev             // prev is now the new head
  }

  // Helper — returns array of order IDs from head to tail (used in tests)
  toArray() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.order.orderId)
      current = current.next
    }
    return result
  }
}

module.exports = LinkedList