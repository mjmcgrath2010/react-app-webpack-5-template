import React from 'react'

import { renderAppComponent } from '@test-utils'

import App from '../App'

describe('<App/>', () => {
  it('Renders the correct copy', () => {
    const view = renderAppComponent(<App />)

    expect(view).toMatchSnapshot()
  })
})
