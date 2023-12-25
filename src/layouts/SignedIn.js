import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://m.media-amazon.com/images/I/61HGIlpfcUL._AC_SL1024_.jpg" />
        <Dropdown pointing="top left" text='Burak Olgun'>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
