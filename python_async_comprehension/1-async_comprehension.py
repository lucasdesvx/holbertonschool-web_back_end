#!/usr/bin/env python3
"""Asynchronous comprehension over the async generator."""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect ten values from async_generator."""
    return [value async for value in async_generator()]
