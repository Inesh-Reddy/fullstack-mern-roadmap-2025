function counter() {
  let count = 0;

  return {
    inc: function () {
      count++;
    },
    dec: function () {
      count--;
    },
    reset: function () {
      count = 0;
    },
    print: function () {
      return count;
    },
  };
}
const resCounter = counter();
resCounter.inc();
resCounter.inc();
console.log(resCounter.print());
resCounter.dec();
resCounter.inc();
resCounter.inc();
resCounter.inc();
resCounter.inc();
resCounter.reset();
resCounter.inc();
resCounter.inc();
