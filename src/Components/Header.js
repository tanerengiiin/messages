import React, { useContext } from 'react'
import MainContext from '../MainContext'

const Header = () => {
  const {username}=useContext(MainContext);
  return (
    <div className='header'>
        Welcome {username}!
    </div>
  )
}

export default Header