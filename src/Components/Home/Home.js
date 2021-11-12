import React from 'react'
import Alltrending from '../Alltrending/Alltrending'
import Card from '../Card/Card'
import Facility from '../Facility/Facility'
import Footer from '../Footer/Footer'
import Head from '../Head/Head'
import Hero from '../Hero/Hero'
import Newsletter from '../Newsletter/Newsletter'
import Productcontainer from '../Productcontainer/Productcontainer'

const Home = () => {
    return (
        <div>
            <Head></Head>
            <Hero></Hero>
            <Alltrending></Alltrending>
            <Productcontainer></Productcontainer>
            <Facility></Facility>
            <Card></Card>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Home
