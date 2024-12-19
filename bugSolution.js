import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      // Some task that needs to be stopped
      console.log('Task running');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <View>
        {/* Component UI */}
      </View>
    );
  }
}

export default MyComponent;