import React from 'react'
import { useSelector } from 'react-redux'

function DateInput() {
    const dateInput = useSelector(state => state.form.dateInput)
  console.log(dateInput)
  return (
    <div className='container'>
        <div className="row">
            <div className='mt-3 mx-auto mb-3'>
            {
                dateInput?.map((dateput, i) => {
                    return dateput
                })
            }
            </div>
        </div>
    </div>
  )
}

export default DateInput