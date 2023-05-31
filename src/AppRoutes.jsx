import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import SchedulePage from './pages/SchedulePage'
import ScheduleConfirmPage from './pages/ScheduleConfirmPage/ScheduleConfirmPagel'
import ScheduleAdmin from './pages/ScheduleAdmin'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/schedule' element={<SchedulePage />} />
        <Route
          exact
          path='/scheduleConfirm'
          element={<ScheduleConfirmPage />}
        />
        <Route exact path='/scheduleAdmin' element={<ScheduleAdmin />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
