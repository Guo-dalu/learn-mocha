/**
 * retry 仅用于end to end的测试，当一些网络资源不能很方便地Mock的时候。
 * 不建议在单元测试中使用retry
 * beforeEach/afterEach的钩子都会重新跑一遍，但before 和after的钩子不会。
 */
const assert = require('assert')

describe("retries", function() {
  // Retry all tests in this suite up to 4 times
  this.retries(4)

  beforeEach(function() {
    browser.get("http://www.yahoo.com")
   
  })

  it("should succeed on the 3rd try", function() {
    // Specify this test to only retry up to 2 times
    this.retries(2)
    expect($(".foo").isDisplayed()).to.eventually.be.true
  })
})
