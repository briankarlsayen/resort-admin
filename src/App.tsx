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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
