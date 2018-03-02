/** Imports */
import React from 'react';

/** Actions */
import { fetchImages } from './actions/'

/** Styles */
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tag: 'pash',
      items: []
    }
  }

  componentDidMount() {
    fetchImages('sydney', this.updateItems);
  }

  updateItems = items => this.setState({ items })

  updateTag = event => this.setState({ tag: event.target.value.trim() })

  onPressEnter = event => {
    if (event.key === 'Enter') {
      this.getNewImages();
    }
  }

  getNewImages = () => fetchImages(this.state.tag, this.updateItems)

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <div className="search-box">
          <input className="search" placeholder="Search for a tag" onChange={this.updateTag} onKeyPress={this.onPressEnter} type="text" />
          <button className="search-button" onClick={this.getNewImages}>Search</button>
        </div>

        <div className="content">
          {items.map((item, key) => {
            return (
              <div className="image" key={key} style={{ backgroundImage: `url('${item.media.m}?w=300')` }} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
