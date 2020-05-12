import React from "react";
import { StarshipsList } from "../../sw-component";
import { withRouter } from "react-router-dom";

class ListStarshipsPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <StarshipsList
        onSelectedItem={(id) => {
          history.push(`/starships/${id}`);
        }}
      />
    );
  }
}

export default withRouter(ListStarshipsPage);
