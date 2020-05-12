import React from "react";
import { PersonList } from "../../sw-component";
import { withRouter } from "react-router-dom";

class ListPersonPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <PersonList
        onSelectedItem={(id) => {
          history.push(`/people/${id}`);
        }}
      />
    );
  }
}

export default withRouter(ListPersonPage);
