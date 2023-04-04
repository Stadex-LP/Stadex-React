import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    manifs: []
  }

  componentDidMount() {
    axios.get(`http://localhost/api/manifestations/`)
      .then(res => {
        const manifs = res.data;
        this.setState({ manifs });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.manifs
            .map(manif =>
              <li key={manif.id}>{manif.denomination}</li>
            )
        }
      </ul>
    )
  }
}