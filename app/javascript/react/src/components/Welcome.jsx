import * as React from 'react'
import {createRoot} from 'react-dom/client'
import QuestionList from './QuestionList'

class Welcome extends React.Component {
  render() { 
    return(
      <div className='container'>
        <h1>Hello world!</h1>
        <h2>Welcome to Rails 7 with React.js</h2>
        <QuestionList />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  root = createRoot(document.getElementById('welcome'))
  root.render(
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>
  )
})

export default Welcome