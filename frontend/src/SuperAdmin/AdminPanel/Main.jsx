import React from 'react'
import DashboardOverview from "../Pages/DashboardOverview";
import Gallery from '../Pages/Gallery';

function Main({ menuActive, submenuActive }) {

  return (
    <div className='main'>
      {menuActive === 0 && <DashboardOverview />}
      {menuActive === 1 && <Gallery submenuActive={submenuActive} />}
    </div>

  )
}

export default Main
