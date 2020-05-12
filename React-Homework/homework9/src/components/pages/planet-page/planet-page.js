import React from "react";
import { PalnetDetails } from "../../sw-component";
import { withRouter } from "react-router-dom";

class PlanetPage extends React.Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    console.log(id);

    return <PalnetDetails itemId={Number(id)} />;
  }
}

export default withRouter(PlanetPage);
