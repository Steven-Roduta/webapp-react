import { BrowserRouter, Routes, Route} from "react-router"
//layouts
import DefaultLayout from "./layouts/DefaultLayout"

//pages
import HomePage from "./movies_pages/homePages"
import MovieList from "./movies_pages/movieList"

export default function App(){

  return (
  <BrowserRouter>
  <Routes>
    <Route element={<DefaultLayout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movies/:id" element={<MovieList/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
} 