import * as React from 'react'
import * as ReactDOM from 'react-dom'

const EmptyQuestionMessage = (props) => {
  return <div>
    <div className='mt-5 alert alert-danger alert-dismissible fade show' role='alert'>
      <strong>Warning!</strong> 
      <br />
      We were unable to find any questions related to this tag.
      <br />
      Tag: {props.tagname}. Please select another tag.
      <button type="button" className="btn btn-close" data-bs-dismiss="alert" aria-label="Close">
        {/* <span aria-hidden="true">&times;</span> */}
      </button>
    </div>
  </div>
}

export default EmptyQuestionMessage