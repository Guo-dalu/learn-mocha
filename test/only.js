const assert = require("assert")

// describe("only", () => {
//   describe.only("ok", () => {
//     // 注意不能用箭头函数，否则没有this对象
//     /* check test environment */
//     it("1 is less than 2", function() {
//       if (11 < 2) {
//         assert(1 < 2, '1 < 2')
//         } else {
//           assert(1 < 2)
//           this.skip()
//         }
//     })

//     it("3 is not larger than 4", () => {
//       assert(3 <= 4, "3 > 4")
//     })

//     it("5 is larger than 2", () => {
//       assert(5 > 2, "5 > 2?")
//     })
//   })
// })

// describe("Array", function() {
//   before(function before() {
//    console.log('b----->')
//   })

//   describe.only("#indexOf()", function() {
//     it("should return -1 unless present", function() {
//       // this test will be run
//     })

//     it("should return the index when present", function() {
//       // this test will also be run
//     })
//   })

//   describe.only("#concat()", function() {
//     it("should return a new Array", function() {
//       // this test will also be run
//     })
//   })

//   describe("#slice()", function() {
//     it("should return a new Array", function() {
//       // this test will not be run
//     })
//   })
// })

// describe("Array", function() {
//   describe("#indexOf()", function() {
//     it.skip('this will not run', () => {
//       assert('asdfohaosi')
//     })
//   })
// })

/**
 * this.skip() 之后的代码不会再被执行，之前的代码, 如果通过会被标记为pending，如果不通过则仍然是fail
 * 如果要跳过多个测试，在before钩子里使用this.skip(), 它会跳过所有的 it, beforeEach, afterEach 和内部的describe块。但是不会跳过同一层的after快。
 */

describe("outer", function() {
  before(function() {
    this.skip()
  })

  after(function() {
    console.log('---after')
    // will be executed
  })

  describe("inner", function() {
    before(function() {
      // will be skipped
      console.log('inner before')
    })

    after(function() {
      // will be skipped
      console.log('inner after')
    })
  })

  it('should discriminate outer and inner', () => {
    assert(true)
  })
})
