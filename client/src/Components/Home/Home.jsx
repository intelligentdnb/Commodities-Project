import {React, useEffect, useState }  from 'react'
//import Navbar from './Navbar/Navbar'
import DrawerCategories from './DrawerCategories/DrawerCategories'
import {useDispatch, useSelector} from 'react-redux'
import { getPost, getCategoriesByName, getUserDetails} from '../../Redux/Actions/Actions'
import Cards from './Card/Cards'
import Paginado from "./Paginado/Paginado"
import s from './Home.module.css'
import Filters from './Filters/Filters'
import { useAuth0 } from "@auth0/auth0-react";

const Home = ({currentPage, setCurrentPage}) => {
  const dispatch = useDispatch()
  const {allCategories} = useSelector(state => state.categories)
  const {posts} = useSelector(state=>state.posts)
  const { user } = useAuth0();

  useEffect(()=>{
    dispatch(getUserDetails(user.email))
    dispatch(getPost())
    dispatch(getCategoriesByName())
  },[dispatch, user.email])

//paginado
 //pagina actual
const [postPerPage, setPostPerPage] = useState(3); //cantidad de cards por paginas
const indexOfLastPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const currentPost = posts.slice(
  indexOfFirstPost,
  indexOfLastPost
);

const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  return (
    <div>
    
    <div className={s.container}>
      <DrawerCategories allCategories={allCategories} setCurrentPage={setCurrentPage}/>
      <Cards currentPost={currentPost} />
      <Filters setCurrentPage={setCurrentPage}/>
      </div>
      <Paginado
          setPostPerPage={setPostPerPage}
          setCurrentPage={setCurrentPage}
          postPerPage={postPerPage}
          posts={posts.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      {/* more components in HOME */}
    </div>
  )
}

export default Home;