import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Header from './Header'

const Model = () => {
    return (
        <Wrap>
            <Header/>

        <Fade bottom>
        <ItemText>
            <h1>Model S</h1>
            <h5>Order Online For Touchless Delivery</h5>
        </ItemText>
        </Fade>

<Fade right>
<Buttons>
<div className="row">
<div className="col-lg-12 col-8 mx-auto">
    

<ButtonGroup>

<LeftButton>
Custom Order

</LeftButton>

<RightButton>
Existing Enventory

</RightButton>


</ButtonGroup>

</div>
</div>

<center><DownArrow src="./images/down-arrow.svg"></DownArrow></center>

</Buttons>
</Fade>


   
    </Wrap>
    )
}

export default Model



const Wrap = styled.div`
width:100%;
height:100vh;
min-height:auto;
background-image: url('/images/model-s.jpg');
background-size:cover;
background-position: center;
background-repeat: no-repeat;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
`

const ItemText= styled.div `
text-align:center;
padding-top:15vh;
`

const ButtonGroup= styled.div`
display:flex;
@media screen(max-width:768px) {
    flex-direction:column;
    
}


`

const LeftButton= styled.div`
background-color: rgba(23,26,32,0.8);
height:40px !important;
width:256px !important;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:30px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
line-height:22px;
box-shadow: 0px 0px 10px lightgrey;
cursor:pointer;
margin-bottom: 80px;

`

const RightButton= styled(LeftButton) `
margin-left:20px;
color:black;
background-color:white;

`

const DownArrow=styled.img`
height:40px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;

`
const Buttons=styled.div`
margin-bottom:10px;

`
