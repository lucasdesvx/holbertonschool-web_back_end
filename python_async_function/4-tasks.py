#!/usr/bin/env python3
"""
Module for running asynchronous tasks concurrently.
"""
import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run task_wait_random n times and return delays in completion order.

    Args:
        n (int): The number of tasks to run.
        max_delay (int): The maximum delay for each task.

    Returns:
        List[float]: The delays in ascending order.
    """
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    for completed in asyncio.as_completed(tasks):
        delays.append(await completed)
    return delays
