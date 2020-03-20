import { Component } from 'react';


class Text extends Component {

  constructor(props) {
    super(props);
    this.state = { backResponse: '' };
  }

  callBack() {
    fetch('http://localhost:9000/testBack')
      .then(res => res.text())
      .then(res => this.setState({ backResponse: res }));
  }

  componentWillMount() {
    this.callBack();
  }

  render() {
    return (
      this.state.backResponse
    );
  }
}
export default Text;


