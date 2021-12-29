import React,{useState} from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

const Header = () => {

    const [ burgerStatus, setBurgerStatus] = useState( )


    return (
      <Container>
          <a href="/">
              <img  src="images/logo.svg" alt="logo" />
          </a>

          <MainMenu>
             <a href="/model-s">Model S</a>
             <a href="#">Model 3</a>
             <a href="#">Model X</a>
             <a href="#">Model Y</a>
             <a href="#">Solar Roof</a>
             <a href="#">Solar Panels</a>

          </MainMenu>

          <RightMenu>
              <a href="#">Shop</a>
              <a href="#">Account</a>

              <CustomMenu  onClick={()=>setBurgerStatus(true)}  />

          </RightMenu>

          <BurgerNav show={burgerStatus}>
              <CloseWrapper>
              <CustomClose onClick={()=>setBurgerStatus(false)}/>
              </CloseWrapper>
              
             < li><a href="#">Existing Inventory</a></li>
             < li><a href="#">Used Inventory</a></li>
             < li><a href="#">Trade-in</a></li>
             < li><a href="#">Cybertruck</a></li>
             < li><a href="#">Roadaster</a></li>
             < li><a href="/model-s">Model S</a></li>
             < li><a href="#">Model Y</a></li>
             < li><a href="#">Model X</a></li>
          </BurgerNav>

      </Container>
    )
}

export default Header

const Container=styled.div `

min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:10;
`

const MainMenu= styled.div `

display:flex;
justify-content:center;
flex:1;

a{
    text-decoration:none;
    font-weight: bold;
    padding: 0px 10px;
    text-transform:uppercase;
    font-weight:13px;
    flex-wrap:nowrap;
    font-size:15px;
    color: rgba(23,26,32,0.8);
}
@media (max-width:980px) {
 
    a{
     font-size:10px;
 
    }
     
 }

@media (max-width:774px) {
   display:none;

   a{
    font-size:12px;

   }
    
}

`

const RightMenu= styled.div `
a{
    text-decoration:none;
    font-weight: bold;
    padding: 0px 10px;
    text-transform:uppercase;
    flex-wrap:nowrap;
    font-size:15px;
    color: rgba(23,26,32,0.8);
}

@media (max-width:768px) {
 
    a{
     font-size:12px;
 
    }
     
 }


`

const CustomMenu=styled(Menu) `
cursor:pointer;
`

const BurgerNav=styled.div `
position: fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:100;
padding:5px 0px;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
transition :0.2s ease-in;

a{
    text-decoration:none;
    font-weight: bold;
    text-transform:uppercase;
    flex-wrap:nowrap;
    font-size:15px;
    color: rgba(23,26,32,0.8);
}
li{
    list-style-type: none;
    padding:15px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}

`

const CustomClose=styled(Close)`

cursor:pointer;

`

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`