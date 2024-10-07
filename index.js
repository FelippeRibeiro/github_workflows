let count = 0;

const interverl = setInterval(() => {
  console.log(count);
  count++;
  if (count === 5) {
    clearInterval(interverl);
    console.log('Done');
  }
}, 2000);
