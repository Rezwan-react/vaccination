import React from 'react'
import Home from '../components/home/Home'
import Banner from '../components/banner/Banner'
import Ad from '../components/ad/Ad'
import Result from '../components/result/Result'
import Protects from '../components/protects/Protects'

function HomePage() {
  return (
    <>
        <Home/>
        <Banner/>
        <Ad/>
        <Result/>
        <Protects/>
    </>
  )
}

export default HomePage