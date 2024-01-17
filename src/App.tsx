import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Layout from './layout'
import Calendar from './pages/Calendar'
import Reports from './pages/Reports'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { CssBaseline } from '@mui/material'
import Booking from './pages/Booking'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// layout
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'booking',
          element: <Booking />,
        },
        {
          path: 'calendar',
          element: <Calendar />,
        },
        {
          path: 'reports',
          element: <Reports />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
