import { Homepage, BlogContentPage } from "./Pages";
import {Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch'


export default function App() {
  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*','http://localhost:1337/api/posts?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data?data:""} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage  blogs={data?data:""}/>}></Route>
      </Routes>
    </div>
  )
}