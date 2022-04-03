import { SvgIcon } from '@mui/material/'
import { Dashboard, Create, TableView } from '@mui/icons-material'

export type PageMenu = {
  icon: typeof SvgIcon
  id: string
  isExternal?: boolean // optional, redirect to external link
  name: string
  path: string
}

export const pageMenus: PageMenu[] = [
  {
    icon: Dashboard,
    id: '',
    name: 'Dashboard',
    path: '/',
  },
  {
    icon: Create,
    id: 'form',
    name: 'Form',
    path: '/form',
  },
  {
    icon: TableView,
    id: 'Table',
    name: 'Table',
    path: '/table',
  },
]
