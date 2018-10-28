function sum(a, b)
{
  return a + b;
}
module.exports = function make(...arg){
    const elem = arg;
    console.log(elem);
    return function innerFn(...inArg){
      if (typeof inArg[0] !== 'function')
        {
          elem.push(...inArg);
          return innerFn;
        }
      return elem.reduce(sum, 0);
    }
  }
  