import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to='/update' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routes