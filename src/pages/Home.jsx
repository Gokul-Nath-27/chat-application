import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatMain from '../components/ChatMain'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar />
            <ChatMain />
        </div>
    </div>
  )
}

export default Home