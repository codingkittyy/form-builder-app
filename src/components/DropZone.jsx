import React from 'react'
import { useSelector } from 'react-redux'
import DateInput from './toolboxComps/DateInput'
import Header from './toolboxComps/Header'
import NumInput from './toolboxComps/NumInput'
import TextInput from './toolboxComps/TextInput'

function DropZone() {
  const showDragzoneText = useSelector(state => state.form.showDragzoneText)  
  return (
    <div className='container'>
        <div className="row">
            <div className="dropzone mt-5">
                {
                    showDragzoneText && (
                        <div className="dashedDropzone mt-3">
                        <p>Dropzone</p>
                    </div>
                    )
                }
                <TextInput />
                <NumInput />
                <Header />
                <DateInput />
            </div>
        </div>
    </div>
  )
}

export default DropZone