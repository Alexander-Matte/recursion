function contains(object, searchValue) {
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
  }