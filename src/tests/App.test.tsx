import React from 'react'
import App from '../App'
import { renderAppComponent } from './test-utils'

describe('<App/>', () => {
  it('Renders the correct copy', () => {
    const { getByText } = renderAppComponent(<App />)

    expect(getByText(/App/)).toBeInTheDocument()
  })
})
