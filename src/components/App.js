import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    gifts: []
  };

  handleClick = () => {
    this.setState(prevState => {
      const { gifts } = prevState;

      const idx = gifts.map(i => i.id);
      const maxId = idx.length ? Math.max(...idx) : 0;

      gifts.push({ id: maxId + 1 });

      return { gifts };
    });
  };

  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {gifts.map(g =>
            <div key={g.id}>
              {g.id}
            </div>
          )}
        </div>
        <Button className="btn-add" onClick={this.handleClick}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
