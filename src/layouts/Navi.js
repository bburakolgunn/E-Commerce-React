import React,{useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'  

export default function Navi() {
    const [isAuthenticated, setIsAuthenticad] = useState(true)
    const navigate = useNavigate()
        
    function handleSignOut(params) {
        setIsAuthenticad(false)
        navigate('/')
    }
    
    function handleSignIn(params) {
        setIsAuthenticad(true)
    }

    return (
        <div>
            <Menu inverted fixed = "top">
                <Container>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Menu position='right'>
                   <CartSummary/>
                   {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:
                   <SignedOut signIn ={handleSignIn} />}
                   
                </Menu.Menu>
                </Container>
               
            </Menu>
        </div>
    )
}
