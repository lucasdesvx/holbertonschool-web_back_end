#!/usr/bin/env python3
"""Asynchronous generator yielding random numbers."""

import asyncio
import random


async def async_generator():
    """Yield ten random numbers, pausing one second between each."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
