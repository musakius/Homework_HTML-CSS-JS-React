import React from "react";
import { PersonDetails } from "../../sw-component";
import { withRouter } from "react-router-dom";

class PersonPage extends React.Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    console.log(match);

    return <PersonDetails itemId={Number(id)} />;
  }
}

export default withRouter(PersonPage);
