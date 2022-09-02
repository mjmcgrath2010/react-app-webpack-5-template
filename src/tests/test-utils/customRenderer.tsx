import React, { FC, ReactElement } from 'react'

import { render, RenderOptions, RenderResult } from '@testing-library/react'

/**
 *
 * The purpose of this component wrapper is to act as a utility in order to make it easier to
 * test components that rely on essential application specific code such as context, providers,
 * redux store, etc in order to setup and render properly. The intent is to keep this as bare bone
 * as possible and add to it as we find ourselves writing tedious setup code in test files that
 * other tests can reuse.
 *
 */

const ActivityWebAppWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}
/**
 *
 * @param ui {ReactElement} - The React element to wrap in the ActivityWebAppWrapper
 * @param options {object}  - Rendering options for setup, see here for all available options:
 *                            https://testing-library.com/docs/react-testing-library/api#render-options
 *
 * @returns {RenderResult}  - Returns an instance of @testing-library/reacts's render function wrapped in
 *                            activity-web's common App setup (e.g context, providers, etc)
 */
export const renderAppComponent = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: ActivityWebAppWrapper, ...options })
