import React from 'react'
import { render } from 'react-dom'

import { App } from './components/App'
import './assets/normalize.css'
import './assets/skeleton.css'

const rootElement = document.querySelector('#root')
render(<App />, rootElement)
