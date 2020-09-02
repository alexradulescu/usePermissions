import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const PageTemplate: FC<Props> = ({ children }) => {
  return (
    <div className="vh-100 vw-100 d-flex bg-dark">
      <main className="container">{children}</main>
    </div>
  )
}
