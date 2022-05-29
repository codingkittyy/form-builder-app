import React from 'react'
import DropZone from '../components/DropZone'
import Toolbox from '../components/Toolbox'

function Home() {
  return (
    <div className='container'>
        <div className="row">
            <div className="d-flex">
                <div className="col-md-8">
                    <DropZone />
                </div>
                <div className="col-md-4">
                    <Toolbox />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home