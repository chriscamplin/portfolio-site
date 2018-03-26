import React, { Component } from 'react';
import myData from './site-data.json';
import LazyLoad from 'react-lazy-load'

class Grid extends Component {

  render() {
    return (
      myData.Portfolio.map(function(content, i){
        return (
            <div id={'grid-row' + i} className="grid-row" key={i}>
                <div key={i}>
                    <div>
                        <p>{content.html}</p>
                        <br />
                        <p>{content.image_alt}</p>
                    </div>
                </div>
                <div key={i + 1 } className="test">
                    <LazyLoad height={'50vh'} offsetBottom={100} debounce={false}>
                        <img src={content.image_path} alt={content.image_alt} />
                    </LazyLoad>
                </div>
            </div>
        )
      })
    );
  }
}

export default Grid;
