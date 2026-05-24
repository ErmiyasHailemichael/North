import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegistrationForm from './RegistrationForm'

window.alert = jest.fn()

// clear localStorage before every test so draft never bleeds between tests
beforeEach(() => {
  localStorage.clear()
})

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText('Full Name'), 'Ermi Beyene')
  await user.type(screen.getByLabelText('Email Address'), 'ermi@example.com')
  await user.type(screen.getByLabelText('Password'), 'Secure123')
  await user.type(screen.getByLabelText('Confirm Password'), 'Secure123')
  await user.selectOptions(screen.getByLabelText('Role / Account Type'), 'developer')
  await user.click(screen.getByLabelText(/terms & conditions/i))
}

// ─── NORMAL CASES ────────────────────────────────────────────────────────────

describe('Normal cases', () => {
  test('renders all 6 fields and the submit button', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Role / Account Type')).toBeInTheDocument()
    expect(screen.getByLabelText(/terms & conditions/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  test('shows "Registering..." and disables button during submission', async () => {
    const user = userEvent.setup({ delay: null })
    render(<RegistrationForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: /create account/i }))
    expect(await screen.findByRole('button', { name: /registering/i })).toBeDisabled()
  })

  test('resets all fields after successful submission', async () => {
    const user = userEvent.setup({ delay: null })
    render(<RegistrationForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: /create account/i }))
    await waitFor(
      () => expect(screen.getByLabelText('Full Name')).toHaveValue(''),
      { timeout: 5000 }
    )
    expect(screen.getByLabelText('Email Address')).toHaveValue('')
    expect(screen.getByLabelText('Password')).toHaveValue('')
  }, 10000)
})

// ─── EDGE CASES ──────────────────────────────────────────────────────────────

describe('Edge cases', () => {
  test('shows all required errors when submitting an empty form', async () => {
    const user = userEvent.setup({ delay: null })
    render(<RegistrationForm />)
    await user.click(screen.getByRole('button', { name: /create account/i }))
    expect(await screen.findByText('Full name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    expect(screen.getByText('Please confirm your password')).toBeInTheDocument()
    expect(screen.getByText('Please select a role')).toBeInTheDocument()
    expect(screen.getByText('You must accept the terms')).toBeInTheDocument()
  })

  test('rejects a password that is missing an uppercase letter', async () => {
    const user = userEvent.setup({ delay: null })
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText('Password'), 'alllower1')
    await user.click(screen.getByRole('button', { name: /create account/i }))
    expect(
      await screen.findByText('Must contain uppercase, lowercase, and a number')
    ).toBeInTheDocument()
  })

  test('shows error when confirm password does not match password', async () => {
    const user = userEvent.setup({ delay: null })
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText('Password'), 'Secure123')
    await user.type(screen.getByLabelText('Confirm Password'), 'Different99')
    await user.click(screen.getByRole('button', { name: /create account/i }))
    expect(await screen.findByText('Passwords do not match')).toBeInTheDocument()
  })
})