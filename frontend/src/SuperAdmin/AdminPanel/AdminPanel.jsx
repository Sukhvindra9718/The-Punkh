import React  from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import '../../Style/Dashboard.css'



function Dashboard() {
  const [menuActive,setMenuActive]=React.useState(0)
  const [submenuActive,setSubmenuActive]=React.useState(-1)


  return (
    <div className="dashboard">
      <div className='sidebar'>
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} submenuActive={submenuActive} setSubmenuActive={setSubmenuActive}/>
      </div>
      <div className='dashboard-main'>
        <Main menuActive={menuActive} submenuActive={submenuActive}/>
      </div>
    </div>
  )
}

export default Dashboard
