import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

const ServerError = (props) => {
  return(
    <div>
      <p className="lead fw-bold">
        Please fix the following errors:
        { props.errors.map((error, index) => (
          <p className='text-danger' key={index}>{error}</p>
        )) }
      </p>
    </div>
  )
}

export default ServerError