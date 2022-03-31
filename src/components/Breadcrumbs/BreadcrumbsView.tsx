import React from 'react'
import {
  Breadcrumbs, Typography, Link,
} from '@mui/material'

interface BreadcrumbsProps {
  items: {
    name: string
    link: string
  }[]
}

const BreadcrumbsView = ({
  items,
}: BreadcrumbsProps) => (
  <Breadcrumbs separator="›" aria-label="breadcrumb">
    {items.map((item, index) => {
      if (index === items.length - 1) {
        return (
          <Typography key={item.name} color="text.primary">
            {item.name}
          </Typography>
        )
      }
      return (
        <Link color="text.primary" key={item.name} href={item.link} sx={{ textDecoration: 'none' }}>
          {item.name}
        </Link>
      )
    })}
  </Breadcrumbs>
)

export default BreadcrumbsView
