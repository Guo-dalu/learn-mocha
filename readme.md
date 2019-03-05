best practice

- 使用.skip()而不是注释掉测试代码

- 为了避免误解，在调用this.skip()之后不再有任何测试代码或者钩子。一个测试要么做出断言，要么就用this.skip()跳过

- 