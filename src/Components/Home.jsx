import React from 'react'
import Sdata from './Sdata'
import Section from './Section'
import Header from './Header'


const Home = () => {
    return (
        <div className='Home'>
			<Header/>

{Sdata.map((val,ind)=>{
							return <Section
							key={ind}
							imgSrc={val.imgsrc}
							heading={val.heading}
							des={val.des}
							leftBtnText={val.leftBtnText}
							rightBtnText={val.rightBtnText}
							/>

						})
						}
        </div>
    )
}

export default Home
