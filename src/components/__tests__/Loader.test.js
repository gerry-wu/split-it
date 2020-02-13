import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, act } from '../../utils/test-utils'
import Loader from '../Loader'

// https://jestjs.io/docs/en/timer-mocks
// This stubs out native timer functions and allows us to control them
// later in the test
jest.useFakeTimers()

const loaderTestId = 'loader'

describe('<Loader />', () => {
  it('should not display the loader on component mount', () => {
    const { queryByTestId } = render(<Loader />)
    expect(queryByTestId(loaderTestId)).not.toBeInTheDocument()
  })

  it('should display a loader after setTimeout call completes', () => {
    const { getByTestId } = render(<Loader />)

    // React recommends that any code that results in a re-render should be wrapped
    // in an act() call, to better simulate real world behaviour
    act(() => {
      jest.runOnlyPendingTimers()
    })
    expect(getByTestId(loaderTestId)).toBeVisible()
  })
})
