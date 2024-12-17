from .observer import DatabaseObserver
from .repository import JsonDatabase

class JsonDbWrapper:
    def __init__(self, db_path, observer):
        self.db_path = db_path
        self.db = JsonDatabase(db_path, observer)

    def __getattr__(self, name):
        if hasattr(self.db, name):
            return getattr(self.db, name)
        raise AttributeError(f"{self.__class__.__name__} object has no attribute '{name}'")
