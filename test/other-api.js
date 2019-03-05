const assert = require("assert")

describe("something slow", function() {
  this.slow(1000) // five minutes

  it("should take long enough for me to go make a sandwich", function(done) {
    setTimeout(() => {
      assert(2)
      done()
    }, 500)
  })
})

describe("a suite of tests", function() {
  this.timeout(500)

  it("should take less than 500ms", function(done) {
    setTimeout(done, 300)
  })

  it("should take less than 500ms as well", function(done) {
    setTimeout(done, 250)
  })
})
