#!/usr/bin/env python3
""" Task 8: List all documents in Python using PyMongo """


def list_all(mongo_collection):
    """Lists all documents in a collection."""
    return list(mongo_collection.find())
