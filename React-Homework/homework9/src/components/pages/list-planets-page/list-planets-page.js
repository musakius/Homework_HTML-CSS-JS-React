import React from "react";
import { PlanetList } from "../../sw-component";
import { withRouter } from "react-router-dom";

class ListPlanetPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <PlanetList
        onSelectedItem={(id) => {
          history.push(`/planets/${id}`);
        }}
      />
    );
  }
}

export default withRouter(ListPlanetPage);
