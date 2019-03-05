const assert = require("assert")

describe("hooks", function() {
  before(function before() {
    // runs before all tests in this block
    console.log("b--->")
  })

  after(function() {
    // runs after all tests in this block
    console.log("after")
  })

  beforeEach(function() {
    // runs before each test in this block
    console.log("before each")
  })

  afterEach(function() {
    // runs after each test in this block
    console.log("after each")
  })

  // test cases
  it('should equal', () => {
    assert.equal(1, true)
  })
  it('should not equal', () => {
    assert.notEqual(1, false, '---------> no')
  })
})
