var cache = {};

const fibonacci = (number) => {
  if (number < 1) return 0;

  if (number <= 2) return 1;

  if (number in cache) return cache[number];

  var value = fibonacci(number - 1) + fibonacci(number - 2);

  cache[number] = value;

  return value;
}

export default fibonacci