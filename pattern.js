'use strict'


class StorePattern {

  static create() {
    return {
      url: 'mongo.create',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' }
          },
          required: ['collection', 'data']
        }
      }
    }
  }

  static remove() {
    return {
      url: 'mongo.remove',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            query: { type: 'object' }
          },
          required: ['collection', 'query']
        }
      }
    }
  }

  static removeById() {
    return {
      url: 'mongo.removeById',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            id: { type: ['number', 'string'] }
          },
          required: ['collection', 'id']
        }
      }
    }
  }

  static update() {
    return {
      url: 'mongo.update',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            data: { type: 'object' },
            query: { type: 'object' }
          },
          required: ['collection', 'data', 'query']
        }
      }
    }
  }

  static updateById() {
    return {
      url: 'mongo.updateById',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            data: { type: 'object' },
            id: { type: ['number', 'string'] }
          },
          required: ['collection', 'data', 'id']
        }
      }
    }
  }

  static find() {
    return {
      url: 'mongo.find',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            query: { type: 'object' },
            options: {
              type: 'object', properties: {
                fields: { type: ['onject', 'array'] },
                orderBy: { type: ['onject', 'array', 'string'] },
                offset: { type: 'integer' },
                limit: { type: 'integer' }
              },
              default: {}
            }
          },
          required: ['collection', 'query']
        }
      }
    }
  }

  static findById() {
    return {
      url: 'mongo.findById',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            id: { type: ['number', 'string'] }
          },
          required: ['collection', 'id']
        }
      }
    }
  }

  static replace() {
    return {
      url: 'mongo.replace',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            data: { type: 'object' },
            query: { type: 'object' }
          },
          required: ['collection', 'data', 'query']
        }
      }
    }
  }

  static replaceById() {
    return {
      url: 'mongo.replaceById',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            data: { type: 'object' },
            id: { type: ['number', 'string'] }
          },
          required: ['collection', 'data', 'id']
        }
      }
    }
  }

  static exists() {
    return {
      url: 'mongo.exists',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            query: { type: 'object' }
          },
          required: ['collection', 'query']
        }
      }
    }
  }

  static count() {
    return {
      url: 'mongo.count',
      schema: {
        request: {
          type: 'object',
          properties: {
            collection: { type: 'string' },
            query: { type: ['object', 'string'] }
          },
          required: ['collection', 'query']
        }
      }
    }
  }
}

module.exports = StorePattern