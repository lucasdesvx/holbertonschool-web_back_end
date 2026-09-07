#!/usr/bin/env python3
""" Task 11: Where can I learn Python? - PyMongo function """


def schools_by_topic(mongo_collection, topic):
    """Returns the list of school having a specific topic."""
    return list(mongo_collection.find({"topics": topic}))
