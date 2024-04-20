import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>
        <Nav />
        <Hero
        title={
          "Welcome to MedCare complete solution . The focus on addressing Diabetes related issues."
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>

  )
}

export default Home