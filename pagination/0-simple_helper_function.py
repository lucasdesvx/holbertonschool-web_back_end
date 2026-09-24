#!/usr/bin/env python3
"""Module for calculating index range for pagination."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Calculate start and end indexes for a given page and page_size.

    Args:
        page (int): The 1-indexed page number.
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing (start_index, end_index).
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
