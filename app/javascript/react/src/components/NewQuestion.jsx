import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import ServerError from './serverError'

const NewQuestion = () => {
  const questionTags = [
    {label: 'Ruby', value: 'Ruby'},
    {label: 'React', value: 'React'}
  ]

  const [isServerError, setIsServerError] = useState(false)
  const [serverErrors, setServerErrors] = useState([])
  const [formField, setFormField] = useState({
    title: '',
    tag: questionTags[0].value
  })

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    // console.log(formField)
    createQuestion(formField)
  }

  const handleFormFields = (event) => {
    setFormField({ ...formField, [event.target.name]: event.target.value })
  }

  const createQuestion = (data) => {
    fetch('/api/v1/questions/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
        if (data['status'] === "failure") {
          setIsServerError(true)
          setServerErrors(data['data'])
        } else {
          setIsServerError(false)
          setServerErrors([])
        }
      })
      .catch((error) => {
        console.log('Error', error)
      })

  }

  return(
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Question</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={event => handleQuestionSubmit(event)}>
            <div className="modal-body">
              { isServerError && <ServerError errors={serverErrors} />}
              <div className='form-group'>
                <label className='form-label my-3'>Title:</label>
                <input type='text' name="title" className='form-control form-control-lg rounded-0' value={formField.title} onChange={event => handleFormFields(event)} />
              </div>

              <div className='form-group'>
                <label className='form-label my-3'>Tag:</label>
                <select name="tag" className='form-select form-select-lg rounded-0' onChange={event => handleFormFields(event)} value={formField.tag}>
                  {questionTags.map((tag) =>(
                    <option key={tag.value} value={tag.value}>{tag.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Create Question</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewQuestion