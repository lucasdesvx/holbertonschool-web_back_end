# Python Async Comprehension

This project demonstrates asynchronous generators and comprehensions.

- `0-async_generator.py` yields ten random floating-point values between 0 and
  10, waiting one second before each value.
- `1-async_comprehension.py` collects the values with an asynchronous
  comprehension.
- `2-measure_runtime.py` runs four comprehensions concurrently and returns
  their elapsed runtime in seconds. Since the generators wait concurrently,
  the total runtime is approximately ten seconds rather than forty.

Run the examples from this directory with Python 3:

```sh
python3 -c "import asyncio; from importlib import import_module; print(asyncio.run(import_module('1-async_comprehension').async_comprehension()))"
```
