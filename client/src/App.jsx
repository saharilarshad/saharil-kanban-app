import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './css/custom-scrollbar.css'
import CssBaseLine from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import AuthLayout from './components/layout/AuthLayout'
import Home from './pages/Home'
import Board from './pages/Board'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: { mode: mode }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='login' element={<Login mode={mode} setMode={setMode} />} />
            <Route path='signup' element={<Signup mode={mode} setMode={setMode} />} />
          </Route>
          <Route path='/' element={<AppLayout theme={theme} mode={mode} setMode={setMode}/>}>
            <Route index element={<Home mode={mode} setMode={setMode} />} />
            <Route path='boards' element={<Home />} />
            <Route path='boards/:boardId' element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;