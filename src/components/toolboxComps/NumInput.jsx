import React from 'react'
import { useSelector } from 'react-redux'

function NumInput() {
    const numText = useSelector(state => state.form.numText)
  return (
    <div className='container'>
        <div className="row">
            <div className='mt-3 mx-auto mb-3'>
            {
                numText?.map((numput, i) => {
                    return numput
                })
            }
            </div>
        </div>
    </div>
  )
}

export default NumInput