#!/usr/bin/env python3
"""Module for creating functions that multiply by a fixed value."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""

    def multiply(value: float) -> float:
        return value * multiplier

    return multiply
