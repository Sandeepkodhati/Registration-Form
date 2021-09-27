// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmit: true,
    FirstErrorMsg: '',
    lastErrorMsg: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState(prevState => ({
        isSubmit: !prevState.isSubmit,
      }))
    } else if (firstName === '' && lastName === '') {
      this.setState({FirstErrorMsg: '*Required', lastErrorMsg: '*Required'})
    } else if (firstName === '') {
      this.setState({FirstErrorMsg: '*Required'})
    } else {
      this.setState({lastErrorMsg: '*Required'})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
    console.log(event.target.value)
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
    console.log(event.target.value)
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({FirstErrorMsg: '*Required'})
    } else {
      this.setState({FirstErrorMsg: ''})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastErrorMsg: '*Required'})
    } else {
      this.setState({lastErrorMsg: ''})
    }
  }

  onRenderRegistrationForm = () => {
    const {firstName, lastName, FirstErrorMsg, lastErrorMsg} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstname" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          className="input"
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        <p className="error-msg">{FirstErrorMsg}</p>

        <label htmlFor="lastname" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className="input"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        <p className="error-msg">{lastErrorMsg}</p>

        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  onRenderSubmitForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p className="submit-heading">Submitted Successfully</p>
      <button type="submit" className="another-response-button">
        Submit Another Response
      </button>
    </form>
  )

  render() {
    const {isSubmit} = this.state
    return (
      <div className="registration-container">
        <div>
          <h1 className="registration-heading">Registration</h1>
        </div>
        {isSubmit ? this.onRenderRegistrationForm() : this.onRenderSubmitForm()}
      </div>
    )
  }
}

export default RegistrationForm
