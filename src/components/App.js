import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

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

  removeGift = id => {
    const gifts = this.state.gifts.filter(i => i.id !== id);

    this.setState({ gifts });
  };

  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {gifts.map(g =>
            <Gift key={g.id} gift={g} removeGift={this.removeGift} />
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
