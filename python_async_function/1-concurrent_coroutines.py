#!/usr/bin/env python3
"""
Module for concurrent coroutines.
"""
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run wait_random n times and return the delays in completion order.

    Args:
        n (int): The number of coroutines to run.
        max_delay (int): The maximum delay for each coroutine.

    Returns:
        List[float]: The delays in ascending order.
    """
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]
    for completed in asyncio.as_completed(tasks):
        delays.append(await completed)
    return delays
