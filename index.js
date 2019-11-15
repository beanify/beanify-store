'use strict'

class Store {

  constructor(driver, options) {
    this._driver = driver
    this._options = options
  }

  get driver() {
    return this._driver
  }

  get options() {
    return this._options
  }

  create() {
    throw new Error('接口未实现')
  }

  remove() {
    throw new Error('接口未实现')
  }

  removeById() {
    throw new Error('接口未实现')
  }

  update() {
    throw new Error('接口未实现')
  }

  updateById() {
    throw new Error('接口未实现')
  }

  find() {
    throw new Error('接口未实现')
  }

  findById() {
    throw new Error('接口未实现')
  }

  replace() {
    throw new Error('接口未实现')
  }

  replaceById() {
    throw new Error('接口未实现')
  }

  exists() {
    throw new Error('接口未实现')
  }
}

module.exports = Store