import React from "react";

const ErrorComponent = (errorData) => {
  for (let key in errorData) {
    let errorArr = errorData[key];

    const errorsMessage = errorArr.map((message, index) => {
      return (
        <li className="item-error" key={index}>
          {message}
        </li>
      );
    });

    return <ul className="list-error">{errorsMessage}</ul>;
  }
};

export default ErrorComponent;
