import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addinputText, addNumText, addHeader, addDate } from '../redux/formSlice'
import './toolbox.css'

function Toolbox() {
  const dispatch = useDispatch()

  return (
    <div className='container'>
        <div className="row">
           <div className="toolbox mt-5 ms-5">
                <button  className='d-block mb-3'
                onClick={() =>  dispatch(addinputText())}>Text Input</button>
                <button  onClick={() =>  dispatch(addNumText())}>Number Input</button>
                <button className='d-block mt-3'  onClick={() =>  dispatch(addHeader())}>Header</button>
                <button className='d-block mt-3' onClick={() =>  (dispatch(addDate()))}>Date Input</button>
           </div>
        </div>
    </div>
  )
}

export default Toolbox