import { IconButton, Paper } from '@mui/material'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'
import { red } from '@mui/material/colors'

const SearchBar = () => {

   const [searchTerm, setsearchTerm] = useState('')
   const navigate = useNavigate()
   const onhandleSubmit =(e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setsearchTerm('');

    }

   }
  return (
    <Paper
     component='form' onSubmit={onhandleSubmit} sx={{borderRadius:20,bordr:'1px solid #e3e3e3', pl:2, boxShadow:'none', mr:{sm:5} }}>
        <input className='search-bar'
        placeholder='Search ...'
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)} />
        <IconButton type='submit' sx={{ p:'10px', color:red}}>
            <Search/>

        </IconButton>
        
     </Paper>

  )
}

export default SearchBar