/** Imports */
import React from 'react';
import Lightbox from 'react-image-lightbox';

/** Actions */
import { fetchImages } from './actions/'

/** Styles */
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tag: 'pash',
      items: [],
      index: 0,
      showLightBox: false
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

  getLightBoxContents = () => {
    const { items } = this.state;

    return items.map(item => item.media.m.replace('_m.', '_b.'));
  }

  toggleLightBox = index => () => this.setState(prevState => ({
    index,
    showLightBox: !prevState.showLightBox
  }))

  render() {
    const { items, index, showLightBox } = this.state;
    const lightBoxImages = this.getLightBoxContents();

    return (
      <div className="App">
        <div className="search-box">
          <input className="search" placeholder="Search for a tag" onChange={this.updateTag} onKeyPress={this.onPressEnter} type="text" />
          <button className="search-button" onClick={this.getNewImages}>Search</button>
        </div>

        <div className="content">
          {items.map((item, key) => {
            return (
              <div className="image" key={key} style={{ backgroundImage: `url('${item.media.m}?w=400')` }} onClick={this.toggleLightBox(parseInt(key, 10))} />
            )
          })}
        </div>

        {showLightBox && (
          <Lightbox mainSrc={lightBoxImages[index]}
            nextSrc={lightBoxImages[(index + 1) % lightBoxImages.length]}
            prevSrc={lightBoxImages[(index + lightBoxImages.length - 1) % lightBoxImages.length]}
            onCloseRequest={this.toggleLightBox(0)}
            onMovePrevRequest={() => this.setState(prevState => ({ index: (index + lightBoxImages.length - 1) % lightBoxImages.length }))}
            onMoveNextRequest={() => this.setState(prevState => ({ index: (index + 1) % lightBoxImages.length }))} />
        )}
      </div>
    );
  }
}

export default App;
