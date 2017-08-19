import '../style/add-form.css';

import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        todo: '',
      },
    };
  }

  onInputChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        todo: e.target.value,
      },
    });
  }

  onTodoAdd(e) {
    e.preventDefault();

    if (!this.state.formData.todo.trim())
      return;

    this.props.onTodoAdd(this.state.formData.todo);

    this.setState({
      formData: {
        ...this.state.formData,
        todo: '',
      },
    });
  }

  render() {
    return(
      <div className="todo-form">
        <div className="row">
          <div className="col-xs-12">
            <form onSubmit={(e) => this.onTodoAdd(e)}>
              <FormGroup>
                <FormControl type="text" placeholder="What needs to be done."
                             value={this.state.formData.todo} name="todo"
                             onChange={(e) => this.onInputChange(e)} />
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;
