import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

const links = [
  { href: '/settings', label: 'Settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
]

function MenuComp() {
  function showSettingsDialog() {
    alert('Open settings dialog!')
  }
  return (
    <Menu>
      <MenuButton>My account</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <button onClick={showSettingsDialog} className="block w-full text-left data-[focus]:bg-blue-100">
            Settings
          </button>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
        <form action="/logout" method="post">
          <MenuItem>
            <button type="submit" className="block w-full text-left data-[focus]:bg-blue-100">
              Sign out
            </button>
          </MenuItem>
        </form>
      </MenuItems>
    </Menu>
  )
}

export default MenuComp