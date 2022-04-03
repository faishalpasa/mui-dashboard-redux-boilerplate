import React, {
  lazy,
  Suspense,
} from 'react'
import {
  Routes, Route, RouteProps,
} from 'react-router-dom'

import LoadingOverlay from 'components/LoadingOverlay'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const Form = lazy(() => import('pages/Form'))
const Table = lazy(() => import('pages/Table'))

interface Page {
  element: RouteProps['element']
  isPublic?: boolean
  isExact?: boolean
  path: string
}

interface PageRouteProps {
  path: string
  isAuthenticated?: boolean
  element?: RouteProps['element']
  [key: string]: unknown
}

const pages: Page[] = [
  {
    path: '/',
    element: <Home />,
    isPublic: true,
  },
  {
    path: '/form',
    element: <Form />,
    isPublic: true,
  },
  {
    path: '/table',
    element: <Table />,
    isPublic: true,
  },
  {
    path: '*',
    element: <NotFound />,
    isExact: false,
  },
]

// const ProtectedRoutes = ({ isAuthenticated, ...rest }: PageRouteProps) => {
//   if (!isAuthenticated) {
//     return null
//   }

//   return <Route {...rest} />
// }

const RoutesView = () => {
  // const { isAuthenticated, isLoading } = useSelector(selectRoutesData, shallowEqual)

  // if (isLoading) {
  //   return <LoadingOverlay />
  // }
  const renderRoutes = ({
    element, path, isExact, isPublic,
  }: Page) => {
    const props: PageRouteProps = {
      path,
      element,
      exact: isExact ?? true,
      isPublic,
    }

    // if (!isPublic) {
    //   props.isAuthenticated = isAuthenticated
    //   return <ProtectedRoutes key={path} {...props} />
    // }

    return <Route key={path} {...props} />
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Routes>
        {pages.map(renderRoutes)}
      </Routes>
    </Suspense>
  )
}

export default RoutesView
