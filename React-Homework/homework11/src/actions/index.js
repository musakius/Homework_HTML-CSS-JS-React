const booksLoaded = (newBooks) => {
  if (newBooks === undefined) {
    throw new Error("Request failed: for books");
  } else {
    return {
      type: "BOOKS_LOADED",
      payload: newBooks,
    };
  }
};

const booksLoading = () => {
  return {
    type: "BOOKS_LOADING",
  };
};

const booksError = (error) => {
  console.log(error);
  return {
    type: "BOOKS_ERROR",
  };
};

const bookAddedToCart = (id) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: id,
  };
};

const bookRemoveFromCart = (id) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: id,
  };
};

const allBooksRemoveFromCart = (id) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: id,
  };
};

export {
  booksLoaded,
  booksLoading,
  booksError,
  bookAddedToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart,
};
