#!/usr/bin/env python3
"""Simple pagination module."""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Calculate start and end indexes for a given page and page_size."""
    return ((page - 1) * page_size, page * page_size)


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the appropriate page of the dataset.

        Args:
            page (int): The 1-indexed page number.
            page_size (int): The number of items per page.

        Returns:
            List[List]: A list of rows representing the requested page.
        """
        assert isinstance(page, int) and type(page) is int and page > 0
        assert isinstance(page_size, int) and type(page_size) is int and page_size > 0

        start_idx, end_idx = index_range(page, page_size)
        data = self.dataset()

        if start_idx >= len(data):
            return []
        return data[start_idx:end_idx]
