import '../style/filter.css';

import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 1,
    };
  }

  onFilterChange(selected) {
    this.props.onFilterChange(selected);

    this.setState({
      ...this.state,
      filter: selected,
    });
  }

  render() {
    return(
      <div className="todo-filter">
        <div className="row">
          <div className="col-xs-12">
            <Nav className="center-pills" bsStyle="pills"
                 activeKey={this.state.filter}
                 onSelect={(selected) => this.onFilterChange(selected)}>
              <NavItem eventKey={1} title="Show all todos">All</NavItem>
              <NavItem eventKey={2} title="Show pending todos">Pending</NavItem>
              <NavItem eventKey={3} title="Show completed todos">Completed</NavItem>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
