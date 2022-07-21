import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import Features from '../components/Features'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Banner />
      <div className='bg-gradient-to-b from-[#faf8ff] to-[#c0ddff] '>
        <Features />
        <Courses />
      </div>
    </div>
  )
}
