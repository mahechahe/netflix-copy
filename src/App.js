import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Register } from './routes/Register';
import {ToastContainer} from 'react-toastify'
import { Context, useContextGlobal } from './context/Context';
import { BrowseHome } from './routes/BrowseHome';
import { Browse } from './routes/Browse';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { MovieSearchUser } from './routes/MovieSearchUser';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const contextGlobal = useContextGlobal()

  return (
    <Context.Provider value={contextGlobal}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/browse' element={
          <ProtectedRoutes>
            <Browse></Browse>
          </ProtectedRoutes>}>
        </Route>
        <Route path='/browsehome' element={
          <ProtectedRoutes>
            <BrowseHome></BrowseHome>
          </ProtectedRoutes>}>
        </Route>
        <Route path='/moviesearch/:movie' element={
          <ProtectedRoutes>
            <MovieSearchUser></MovieSearchUser>
          </ProtectedRoutes>}>
        </Route>
        
      </Routes> 
      <ToastContainer autoClose={2000}/>
    </Context.Provider>
  );
}

export default App;
