import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// Add react-router-dom imports
const appRouter =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<HomePage/>}/>
    <Route path=':type' element={<HomePage/>}/>
    <Route path=':type/:id' element={<PetDetailsPage/>}/>
    <Route path='/search' element={<SearchPage/>}/>
    <Route path='/PetDetailsNotFound' element={<PetDetailsNotFound/>}/>
  </Route>
))
// create router with JSX Route elements

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter}/>
  );
}

export default App;
