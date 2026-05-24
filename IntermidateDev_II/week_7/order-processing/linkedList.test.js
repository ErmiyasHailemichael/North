const Order = require('./order')
const LinkedList = require('./linkedList')

// helper — builds a list from an array of [id, name, details]
const buildList = (orders) => {
  const list = new LinkedList()
  orders.forEach(([id, name, details]) => {
    list.append(new Order(id, name, details))
  })
  return list
}

// ─── NORMAL CASES ────────────────────────────────────────────────────────────

describe('Normal cases', () => {
  test('appends orders in the correct order', () => {
    const list = buildList([
      [1, 'Ermi', 'Laptop'],
      [2, 'Isaac', 'Phone'],
      [3, 'Biruk', 'Tablet'],
    ])
    expect(list.toArray()).toEqual([1, 2, 3])
  })

  test('reverses a list with multiple orders', () => {
    const list = buildList([
      [1, 'Ermi', 'Laptop'],
      [2, 'Isaac', 'Phone'],
      [3, 'Biruk', 'Tablet'],
    ])
    list.reverse()
    expect(list.toArray()).toEqual([3, 2, 1])
  })

  test('reversing twice returns the original order', () => {
    const list = buildList([
      [1, 'Ermi', 'Laptop'],
      [2, 'Isaac', 'Phone'],
      [3, 'Biruk', 'Tablet'],
    ])
    list.reverse()
    list.reverse()
    expect(list.toArray()).toEqual([1, 2, 3])
  })
})

// ─── EDGE CASES ──────────────────────────────────────────────────────────────

describe('Edge cases', () => {
  test('reversing an empty list does not throw', () => {
    const list = new LinkedList()
    expect(() => list.reverse()).not.toThrow()
    expect(list.toArray()).toEqual([])
  })

  test('reversing a single order list returns the same order', () => {
    const list = buildList([[1, 'Ermi', 'Laptop']])
    list.reverse()
    expect(list.toArray()).toEqual([1])
  })

  test('reversing a two order list swaps them correctly', () => {
    const list = buildList([
      [1, 'Ermi', 'Laptop'],
      [2, 'Isaac', 'Phone'],
    ])
    list.reverse()
    expect(list.toArray()).toEqual([2, 1])
  })
})