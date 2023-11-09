import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'
import EmptyQuestionMessage from './EmptyQuestionMessage'
import LoadingSpinner from './LoadingSpinner'
import NewQuestion from './NewQuestion'

const QuestionList = () => {
  const questionTags = [
    {label: 'All', value: 0},
    {label: 'Ruby', value: 1},
    {label: 'React', value: 2}
  ]
  const [questionsList, setQuestionsList] = useState([])
  const [selectedOption, setSelectedOption] = useState(questionTags[0].value)
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isShowLoading, setIsShowLoading] = useState(true)
  const questionsUrl = '/api/v1/questions'

  const fetchQuestionList = () => {
    setIsShowLoading(false)
    setIsShowAlert(false)
    fetch(questionsUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuestionsList(data)
        if (data.length === 0){
          setIsShowAlert(true)
        } else {
          setIsShowAlert(false)
        }
      })
  }

  useEffect(() => {
    fetchQuestionList()
  }, [])

  const updateSelectedTag = (event) => {
    setIsShowLoading(false)
    setIsShowAlert(false)
    setQuestionsList([])
    setSelectedOption(event.target.value)
    fetch(questionsUrl + `?tags=${questionTags[event.target.value].label}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestionsList(data)
        if (data.length === 0){
          setIsShowAlert(true)
          setIsShowLoading(true)
        }
      })
  }

  return(
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        <p className='lead fw-bold '>
          Filter by Tags
        </p>
        <button type="button" className="my-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          New Question
        </button>
        <select className='form-select form-select-lg' value={selectedOption} onChange={event => updateSelectedTag(event)}>
          {questionTags.map((tag) =>(
            <option key={tag.value} value={tag.value}>{tag.label}</option>
          ))}
        </select>
        { questionsList.length > 0 ?
          questionsList.map((question) =>
            <QuestionDetail question={question} key={question.id}/>
          ) : <LoadingSpinner isShowLoading={isShowLoading}/>
        }
        { isShowAlert && <EmptyQuestionMessage tagname={questionTags[selectedOption].label} />}
      </div>
      <NewQuestion />
    </div>
  )
}

export default QuestionList