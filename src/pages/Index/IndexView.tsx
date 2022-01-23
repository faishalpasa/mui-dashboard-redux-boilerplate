import React, {
// lazy,
  Suspense,
} from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'

import LoadingOverlay from 'components/LoadingOverlay'
import Home from 'pages/Home'

// Dynamically import routes here
// const Home = lazy(() => import('routes/Home'))

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
]

const RoutesView = () => {
  const renderRoutes = ({
    element, path, isExact, isPublic,
  }: Page) => {
    const props: PageRouteProps = {
      path,
      element,
      exact: isExact ?? true,
      isPublic,
    }

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
