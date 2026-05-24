import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

type ProfileData = {
  id: number
  username: string
  email: string
  bio: string
  notifications: boolean
}

type FormValues = {
  username: string
  email: string
  bio: string
  notifications: boolean
}

const API = 'http://localhost:3001/profile'

const fetchProfile = async (): Promise<ProfileData> => {
  const res = await fetch(API)
  if (!res.ok) throw new Error('Failed to fetch profile')
  return res.json()
}

const updateProfile = async (data: FormValues): Promise<ProfileData> => {
  if (data.email === 'conflict@example.com') {
    throw { status: 409, message: 'Email is already in use' }
  }
  const res = await fetch(API, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to update profile')
  return res.json()
}

export default function ProfileForm() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchProfile,
  })

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      bio: '',
      notifications: false,
    },
  })

  // Seed the form once data loads
  useEffect(() => {
    if (data) {
      reset({
        username: data.username,
        email: data.email,
        bio: data.bio,
        notifications: data.notifications,
      })
    }
  }, [data, reset])

  const { mutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (updatedData) => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] })
      reset({
        username: updatedData.username,
        email: updatedData.email,
        bio: updatedData.bio,
        notifications: updatedData.notifications,
      })
      alert('Profile saved!')
    },
    onError: (error: any) => {
      if (error.status === 409) {
        setError('email', { message: error.message })
      }
    },
  })

  const onSubmit = (values: FormValues) => {
    mutate(values)
  }

    if (isLoading) {
    return <p className="loading">Loading profile...</p>
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* Username */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register('username', {
            required: 'Username is required',
          })}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>

      {/* Email */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email</label>
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

      {/* Bio */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          rows={4}
          {...register('bio')}
        />
      </div>

      {/* Notifications */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label>
          <input
            type="checkbox"
            {...register('notifications')}
          />
          {' '}Enable notifications
        </label>
      </div>

      {/* Submit */}
      <button type="submit" disabled={!isDirty || isPending}>
        {isPending ? 'Saving...' : 'Save Changes'}
      </button>

    </form>
  )
}