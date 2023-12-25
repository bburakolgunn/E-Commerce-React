import React,{useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticad] = useState(true)

    function handleSignOut(params) {
        setIsAuthenticad(false)
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
