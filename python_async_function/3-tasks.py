#!/usr/bin/env python3
"""
Module for creating asynchronous tasks.
"""
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create a task that runs wait_random.

    Args:
        max_delay (int): The maximum delay for wait_random.

    Returns:
        asyncio.Task: A task running wait_random.
    """
    return asyncio.create_task(wait_random(max_delay))
