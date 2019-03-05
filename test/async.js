describe('User', () => {
  describe('#save()', () => {
    it('should save without error', (done) => {
      setTimeout(done, 1000)
    })
  })
})

/**
 * 也可以return promise
 * v3.0.0之前会被忽略，之后同事返回promise和调用done会报错
 * 现在的version是 6.0.2
 * 如果js 环境支持async/await，也可以用async/await
 */