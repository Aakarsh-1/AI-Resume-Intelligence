
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Dashboard from '../pages/Dashboard'

describe('Dashboard', () => {
  it('renders the welcome heading', () => {
    render(<Dashboard />)

    expect(
      screen.getByRole('heading', {
        name: 'Welcome to your hiring workspace',
      }),
    ).toBeInTheDocument()
  })

  it('renders the dashboard navigation links', () => {
    render(<Dashboard />)

    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute(
      'href',
      '/',
    )

    expect(screen.getByRole('link', { name: 'Jobs' })).toHaveAttribute(
      'href',
      '/jobs',
    )
  })

  it('renders the three main feature cards', () => {
    render(<Dashboard />)

    expect(
      screen.getByRole('heading', { name: 'Resume Validation' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Job Management' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Resume Matching' }),
    ).toBeInTheDocument()
  })
})
