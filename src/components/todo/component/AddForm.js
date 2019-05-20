import React, { Component } from "react";
import { FormControl, FormGroup, HelpBlock } from "react-bootstrap";
import "../style/add-form.scss";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        todo: ""
      }
    };
  }

  onInputChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        todo: e.target.value
      }
    });
  }

  onTodoAdd(e) {
    e.preventDefault();

    if (!this.state.formData.todo.trim()) return;

    this.props.onTodoAdd(this.state.formData.todo);

    this.setState({
      formData: {
        ...this.state.formData,
        todo: ""
      }
    });
  }

  render() {
    return (
      <div className="todo-form">
        <div className="row">
          <div className="col-xs-12">
            <form onSubmit={(e) => this.onTodoAdd(e)}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="What needs to be done"
                  value={this.state.formData.todo}
                  name="todo"
                  onChange={(e) => this.onInputChange(e)}
                />
              </FormGroup>
              <HelpBlock>Press enter to add a task</HelpBlock>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;
