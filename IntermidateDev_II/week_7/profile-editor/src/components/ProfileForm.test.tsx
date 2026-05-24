import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProfileForm from './ProfileForm'

window.alert = jest.fn()

// mock fetch globally
const mockProfile = {
  id: 1,
  username: 'ermi_dev',
  email: 'ermi@example.com',
  bio: 'Full stack developer based in Seattle.',
  notifications: true,
}

const renderWithClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })
  return render(
    <QueryClientProvider client={queryClient}>
      <ProfileForm />
    </QueryClientProvider>
  )
}

beforeEach(() => {
  global.fetch = jest.fn((url, options) => {
    if (!options || options.method === undefined) {
      // GET request
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProfile),
      } as Response)
    }
    // PUT request
    const body = JSON.parse(options.body as string)
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ ...mockProfile, ...body }),
    } as Response)
  }) as jest.Mock
})

afterEach(() => {
  jest.clearAllMocks()
})

// ─── NORMAL CASES ────────────────────────────────────────────────────────────

describe('Normal cases', () => {
  test('shows loading state then populates form with server data', async () => {
    renderWithClient()
    expect(screen.getByText('Loading profile...')).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.getByLabelText('Username')).toHaveValue('ermi_dev')
    )
    expect(screen.getByLabelText('Email')).toHaveValue('ermi@example.com')
    expect(screen.getByLabelText('Bio')).toHaveValue(
      'Full stack developer based in Seattle.'
    )
    expect(screen.getByLabelText('Enable notifications')).toBeChecked()
  })

  test('Save Changes button is disabled when form is not dirty', async () => {
    renderWithClient()
    await waitFor(() =>
      expect(screen.getByLabelText('Username')).toHaveValue('ermi_dev')
    )
    expect(screen.getByRole('button', { name: /save changes/i })).toBeDisabled()
  })

  test('Save Changes button enables when a field is changed', async () => {
    const user = userEvent.setup({ delay: null })
    renderWithClient()
    await waitFor(() =>
      expect(screen.getByLabelText('Username')).toHaveValue('ermi_dev')
    )
    await user.clear(screen.getByLabelText('Username'))
    await user.type(screen.getByLabelText('Username'), 'new_username')
    expect(screen.getByRole('button', { name: /save changes/i })).toBeEnabled()
  })
})

// ─── EDGE CASES ──────────────────────────────────────────────────────────────

describe('Edge cases', () => {
  test('shows error when username is cleared and form is submitted', async () => {
    const user = userEvent.setup({ delay: null })
    renderWithClient()
    await waitFor(() =>
      expect(screen.getByLabelText('Username')).toHaveValue('ermi_dev')
    )
    await user.clear(screen.getByLabelText('Username'))
    await user.type(screen.getByLabelText('Username'), 'x')
    await user.clear(screen.getByLabelText('Username'))
    await user.click(screen.getByRole('button', { name: /save changes/i }))
    expect(await screen.findByText('Username is required')).toBeInTheDocument()
  })

  test('shows error for invalid email format', async () => {
    const user = userEvent.setup({ delay: null })
    renderWithClient()
    await waitFor(() =>
      expect(screen.getByLabelText('Email')).toHaveValue('ermi@example.com')
    )
    await user.clear(screen.getByLabelText('Email'))
    await user.type(screen.getByLabelText('Email'), 'notanemail')
    await user.click(screen.getByRole('button', { name: /save changes/i }))
    expect(
      await screen.findByText('Enter a valid email address')
    ).toBeInTheDocument()
  })

  test('shows conflict error when email is conflict@example.com', async () => {
    const user = userEvent.setup({ delay: null })
    renderWithClient()
    await waitFor(() =>
      expect(screen.getByLabelText('Email')).toHaveValue('ermi@example.com')
    )
    await user.clear(screen.getByLabelText('Email'))
    await user.type(screen.getByLabelText('Email'), 'conflict@example.com')
    await user.click(screen.getByRole('button', { name: /save changes/i }))
    expect(
      await screen.findByText('Email is already in use')
    ).toBeInTheDocument()
  })
})