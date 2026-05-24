import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  role: string
  terms: boolean
}

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      terms: false,
    },
  })

  const hasSubmitted = useRef(false)

  // Auto-focus Full Name on mount
  useEffect(() => {
    setFocus('fullName')
  }, [setFocus])

  // Draft caching — sync to localStorage on any change
  useEffect(() => {
    const subscription = watch((values) => {
      if (hasSubmitted.current) return
      const isEmpty = Object.values(values).every(
        (v) => v === '' || v === false
      )
      if (!isEmpty) {
        localStorage.setItem('registrationDraft', JSON.stringify(values))
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  // Load draft from localStorage on mount only
  useEffect(() => {
    if (hasSubmitted.current) return
    const draft = localStorage.getItem('registrationDraft')
    if (draft) {
      const parsed = JSON.parse(draft) as Partial<FormValues>
      Object.entries(parsed).forEach(([key, value]) => {
        setValue(key as keyof FormValues, value as never)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Submitted:', data)
    hasSubmitted.current = true
    localStorage.removeItem('registrationDraft')
    reset()
    alert('Registration successful!')
  }

  const passwordValue = watch('password')

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* Full Name */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          {...register('fullName', {
            required: 'Full name is required',
            minLength: { value: 3, message: 'Must be at least 3 characters' },
          })}
        />
        {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Must be at least 8 characters' },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message: 'Must contain uppercase, lowercase, and a number',
            },
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === passwordValue || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Role */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="role">Role / Account Type</label>
        <select
          id="role"
          {...register('role', {
            required: 'Please select a role',
            validate: (value) => value !== '' || 'Please select a role',
          })}
        >
          <option value="">Select a role...</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product-manager">Product Manager</option>
        </select>
        {errors.role && <p style={{ color: 'red' }}>{errors.role.message}</p>}
      </div>

      {/* Terms */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label>
          <input
            type="checkbox"
            {...register('terms', {
              validate: (value) => value === true || 'You must accept the terms',
            })}
          />
          {' '}I agree to the Terms & Conditions
        </label>
        {errors.terms && <p style={{ color: 'red' }}>{errors.terms.message}</p>}
      </div>

      {/* Submit */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Create Account'}
      </button>

    </form>
  )
}