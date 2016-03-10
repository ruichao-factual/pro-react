import React, {Component, PropTypes} from 'react';

class ListItem extends Component {
  static propTypes = {
    quantity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <li>
        {this.props.quantity} X {this.props.name}
      </li>
    );
  }
}



export default ListItem;
