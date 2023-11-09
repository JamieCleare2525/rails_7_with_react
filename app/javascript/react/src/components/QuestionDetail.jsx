import * as React from 'react'
import * as ReactDOM from 'react-dom'

class QuestionDetail extends React.Component {
  
  constructor(props){
    super(props)
    this.state = { 
      likeCount: this.props.question.like_count, 
      dislikeCount: this.props.question.dislike_count
    }
    this.updateLikeCounter = this.updateLikeCounter.bind(this)
    this.updateDislikeCounter = this.updateDislikeCounter.bind(this)
  }

  updateLikeCounter() {
    this.setState(function(state){
      var newLikeCount = state.likeCount + 1
      this.updateQuestion({question: {like_count: newLikeCount}})
      return {
        likeCount: newLikeCount
      }
    })
  }

  updateDislikeCounter() {
    this.setState(function(state){
      var newDislikeCount = state.dislikeCount + 1
      this.updateQuestion({question: {dislike_count: newDislikeCount}})
      return {
        dislikeCount: newDislikeCount
      }
    })
  }

  updateQuestion(data){
    fetch(`/api/v1/questions/${this.props.question.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return(
      <div className='card rounded-0 mt-3'>
        <div className='card-body'>
          <h3 className='card-title'>
            {this.props.question.title}
          </h3>
          <p className='lead'>
            <span className='badge bg-primary'>
              {this.props.question.tag}
            </span>
          </p>
          <button type='button' className='btn btn-primary m-2 position-relative' onClick={this.updateLikeCounter}>
            LIKE 
            { this.state.likeCount > 0 ?
             <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.state.likeCount}</span> : ""
            }
          </button>
          <button className='btn btn-primary m-2 position-relative' onClick={this.updateDislikeCounter}>
            DISLIKE 
            { this.state.dislikeCount > 0 ? 
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.state.dislikeCount}</span> : ""
            }
          </button>
        </div>
      </div>
    )
  }
}

export default QuestionDetail