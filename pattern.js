'use strict'


class StorePattern {

  static create(topic) {
    return {
      topic,
      cmd: 'create',
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

  static remove(topic) {
    return {
      topic,
      cmd: 'remove',
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

  static removeById(topic) {
    return {
      topic,
      cmd: 'removeById',
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

  static update(topic) {
    return {
      topic,
      cmd: 'update',
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

  static updateById(topic) {
    return {
      topic,
      cmd: 'updateById',
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

  static find(topic) {
    return {
      topic,
      cmd: 'find',
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

  static findById(topic) {
    return {
      topic,
      cmd: 'findById',
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

  static replace(topic) {
    return {
      topic,
      cmd: 'replace',
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

  static replaceById(topic) {
    return {
      topic,
      cmd: 'replaceById',
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

  static exists(topic) {
    return {
      topic,
      cmd: 'exists',
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

  static count(topic) {
    return {
      topic,
      cmd: 'count',
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