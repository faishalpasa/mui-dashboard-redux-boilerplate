import React from 'react'

interface Layout {
  children: React.ReactNode
}

const LayoutView = ({ children }: Layout) => (
  <div>
    {children}
  </div>
)

export default LayoutView
