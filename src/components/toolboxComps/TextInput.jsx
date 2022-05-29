import React from 'react'
import { useSelector } from 'react-redux'

function TextInput() {
    const inputText = useSelector(state => state.form.inputText)
  return (
    <div className='container'>
        <div className="row">
            <div className='mt-3 mx-auto mb-3'>
            {
                inputText?.map((txtput, i) => {
                    return( 
                    <div key={i} className='mb-3 mx-auto justify-content-center align-items-center txtput'>
                        {txtput}
                    </div>
                    ) 
                })
            }
            </div>
        </div>
    </div>
  )
}

export default TextInput