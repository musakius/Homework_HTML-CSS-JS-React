import React from "react";
import { StarshipsDetails } from "../../sw-component";
import { withRouter } from "react-router-dom";

class StarshipsPage extends React.Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;

    return <StarshipsDetails itemId={Number(id)} />;
  }
}

export default withRouter(StarshipsPage);
