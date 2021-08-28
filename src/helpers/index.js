function findBy (items, id) {
  return items.find(item => item.id === id)
}

export { findBy }
