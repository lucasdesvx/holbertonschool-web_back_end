#!/usr/bin/env python3
"""
Module for basic asynchronous syntax.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Waits for a random delay between 0 and max_delay seconds and returns it.

    Args:
        max_delay (int): The maximum number of seconds to wait. Defaults to 10.

    Returns:
        float: The actual amount of time waited.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
