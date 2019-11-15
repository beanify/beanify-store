'use strict'


class StorePattern {

  static create(topic) {
    return {
      url: `${topic}.create`,
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
      url: `${topic}.remove`,
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
      url: `${topic}.removeById`,
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
      url: `${topic}.update`,
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
      url: `${topic}.updateById`,
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
      url: `${topic}.find`,
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
      url: `${topic}.findById`,
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
      url: `${topic}.replace`,
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
      url: `${topic}.replaceById`,
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
      url: `${topic}.exists`,
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
      url: `${topic}.count`,
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