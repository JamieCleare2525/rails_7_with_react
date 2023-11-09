import * as React from 'react'
import * as ReactDOM from 'react-dom'

const LoadingSpinner = (props) => {
  return(
    <div>
      { !props.isShowLoading ?
        <div className='mt-5 d-flex justify-content-center'>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> : ''
      }
    </div>
  )
}

export default LoadingSpinner