import {Component} from 'react'

import './index.css'

class EditableSave extends Component {
  state = {text: '', edit: false}

  onAddInputText = event => {
    this.setState({text: event.target.value})
  }

  onChangeButton = () => {
    this.setState(prev => ({edit: !prev.edit}))
  }

  render() {
    const {text, edit} = this.state
    return (
      <div className="main-container">
        <form className="form-container">
          <h1 className="title-heading">Editable Text Input</h1>
          <div className="input-button-container">
            {edit ? (
              <p className="para-style">{text}</p>
            ) : (
              <input
                type="text"
                className="input-text-design"
                onChange={this.onAddInputText}
                value={text}
              />
            )}
            {edit ? (
              <button
                type="button"
                className="button-style"
                onClick={this.onChangeButton}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="button-style"
                onClick={this.onChangeButton}
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    )
  }
}
export default EditableSave
