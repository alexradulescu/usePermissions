import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { usePermission } from './usePermission'
import { PageTemplate } from './PageTemplate'
import { Admin } from './Admin'
import { Post } from './Post'
import { NotFound } from './NotFound'

export const App: FC = () => {
  const { isPermitted } = usePermission()

  return (
    <BrowserRouter>
      <Switch>
        {isPermitted('access:adminPage') && (
          <Route path="/admin">
            <PageTemplate>
              <Admin />
            </PageTemplate>
          </Route>
        )}
        <Route exact path="/">
          <PageTemplate>
            <Post />
          </PageTemplate>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
