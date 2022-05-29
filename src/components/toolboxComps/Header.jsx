import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const header = useSelector(state => state.form.header)
  return (
    <div className='container'>
        <div className="row">
            <div className='mt-3 mx-auto mb-3'>
            {
                header?.map((head, i) => {
                    return( 
                    <div key={i} className='mb-3 mx-auto justify-content-center align-items-center txtput'>
                        {head}
                    </div>
                    ) 
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Header