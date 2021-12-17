import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>{this.props.title || <Skeleton />}</h1>
            {this.props.body || <Skeleton count={2} />}
        </div>
    );
  }
}

export default App;
