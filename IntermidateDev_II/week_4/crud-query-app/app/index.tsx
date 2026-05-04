import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'

type NewPost = {
  title: string
  body: string
  userId: number
}

type UpdatePost = {
  id: number
  title: string
  body: string
}

type PatchPost = {
  id: number
  title: string
}

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

const fetchPosts = async (userId: string) => {
  const url = userId
    ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=5`
    : 'https://jsonplaceholder.typicode.com/posts?_limit=5'
  const response = await fetch(url)
  if (!response.ok) throw new Error('Failed to fetch posts')
  return response.json()
}

const createPost = async (newPost: NewPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  })
  if (!response.ok) throw new Error('Failed to create post')
  return response.json()
}

const updatePost = async ({ id, title, body }: UpdatePost) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, title, body, userId: 1 }),
  })
  if (!response.ok) throw new Error('Failed to update post')
  return response.json()
}

const patchPost = async ({ id, title }: PatchPost) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  })
  if (!response.ok) throw new Error('Failed to patch post')
  return response.json()
}

const deletePost = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('Failed to delete post')
  return id
}

export default function Index() {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [editingPost, setEditingPost] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [patchingPost, setPatchingPost] = useState<number | null>(null)
  const [patchTitle, setPatchTitle] = useState('')
  const [filterUserId, setFilterUserId] = useState('')
  const [createError, setCreateError] = useState('')
  const [updateError, setUpdateError] = useState('')
  const [patchError, setPatchError] = useState('')
  const [deleteError, setDeleteError] = useState('')

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts', filterUserId],
    queryFn: () => fetchPosts(filterUserId),
  })

  // Helper function to check if post can be edited
  const canEditPost = (id: number) => id <= 100

  // Helper function to validate form
  const canCreatePost = title.trim().length > 0 && body.trim().length > 0

  // Helper function to handle filter input with validation
  const handleFilterChange = (text: string) => {
    if (text === '') {
      setFilterUserId('')
    } else {
      const num = parseInt(text, 10)
      if (num >= 1 && num <= 10) {
        setFilterUserId(text)
      }
    }
  }

  const createMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(['posts', filterUserId], (old: Post[]) => [newPost, ...old])
      setTitle('')
      setBody('')
      setCreateError('')
      // Auto-reset success message after 2 seconds
      setTimeout(() => {
        createMutation.reset()
      }, 2000)
    },
    onError: (err: any) => {
      setCreateError(err.message || 'Failed to create post')
      setTimeout(() => setCreateError(''), 3000)
    },
  })

  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(['posts', filterUserId], (old: Post[]) =>
        old.map((p) => (p.id === updatedPost.id ? updatedPost : p))
      )
      setEditingPost(null)
      setUpdateError('')
    },
    onError: (err: any) => {
      setUpdateError(err.message || 'Failed to update post')
      setTimeout(() => setUpdateError(''), 3000)
    },
  })

  const patchMutation = useMutation({
    mutationFn: patchPost,
    onSuccess: (patchedPost) => {
      queryClient.setQueryData(['posts', filterUserId], (old: Post[]) =>
        old.map((p) => (p.id === patchedPost.id ? { ...p, title: patchedPost.title } : p))
      )
      setPatchingPost(null)
      setPatchError('')
    },
    onError: (err: any) => {
      setPatchError(err.message || 'Failed to patch post')
      setTimeout(() => setPatchError(''), 3000)
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['posts', filterUserId], (old: Post[]) =>
        old.filter((p) => p.id !== deletedId)
      )
      setDeleteError('')
    },
    onError: (err: any) => {
      setDeleteError(err.message || 'Failed to delete post')
      setTimeout(() => setDeleteError(''), 3000)
    },
  })

  if (isPending) return (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
      <Text>Loading posts...</Text>
    </View>
  )

  if (isError) return (
    <View style={styles.center}>
      <Text style={styles.error}>Error: {error.message}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a Post</Text>
      {createError && <Text style={styles.error}>{createError}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        editable={!createMutation.isPending}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
        editable={!createMutation.isPending}
      />
      <TouchableOpacity
        style={[styles.button, !canCreatePost && styles.disabledBtn]}
        disabled={!canCreatePost || createMutation.isPending}
        onPress={() => createMutation.mutate({ title, body, userId: 1 })}
      >
        <Text style={styles.buttonText}>
          {createMutation.isPending ? 'Submitting...' : 'Submit Post'}
        </Text>
      </TouchableOpacity>
      {createMutation.isSuccess && <Text style={styles.success}>Post created!</Text>}

      <Text style={styles.heading}>Filter by User ID</Text>
      <View style={styles.filterRow}>
        <TextInput
          style={[styles.input, styles.filterInput]}
          placeholder="Enter User ID (1-10)"
          value={filterUserId}
          onChangeText={handleFilterChange}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.clearBtn} onPress={() => setFilterUserId('')}>
          <Text style={styles.clearBtnText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>
        Posts {filterUserId ? `(User ${filterUserId})` : '(All)'}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {editingPost === item.id ? (
              <>
                {updateError && <Text style={styles.error}>{updateError}</Text>}
                <TextInput
                  style={styles.input}
                  value={editTitle}
                  onChangeText={setEditTitle}
                  editable={!updateMutation.isPending}
                />
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={editBody}
                  onChangeText={setEditBody}
                  multiline
                  editable={!updateMutation.isPending}
                />
                <TouchableOpacity
                  style={styles.button}
                  disabled={updateMutation.isPending}
                  onPress={() => updateMutation.mutate({ id: item.id, title: editTitle, body: editBody })}
                >
                  <Text style={styles.buttonText}>
                    {updateMutation.isPending ? 'Saving...' : 'Save (PUT)'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setEditingPost(null)} disabled={updateMutation.isPending}>
                  <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : patchingPost === item.id ? (
              <>
                {patchError && <Text style={styles.error}>{patchError}</Text>}
                <Text style={styles.title}>{item.title}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="New title only"
                  value={patchTitle}
                  onChangeText={setPatchTitle}
                  editable={!patchMutation.isPending}
                />
                <TouchableOpacity
                  style={styles.button}
                  disabled={patchMutation.isPending}
                  onPress={() => patchMutation.mutate({ id: item.id, title: patchTitle })}
                >
                  <Text style={styles.buttonText}>
                    {patchMutation.isPending ? 'Patching...' : 'Save (PATCH)'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPatchingPost(null)} disabled={patchMutation.isPending}>
                  <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {deleteError && item.id.toString() === deleteError && <Text style={styles.error}>{deleteError}</Text>}
                <Text style={styles.userId}>User {item.userId}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <View style={styles.actions}>
                  {canEditPost(item.id) && (
                    <TouchableOpacity onPress={() => {
                      setEditingPost(item.id)
                      setEditTitle(item.title)
                      setEditBody(item.body)
                    }} disabled={deleteMutation.isPending}>
                      <Text style={styles.editBtn}>Edit</Text>
                    </TouchableOpacity>
                  )}
                  {canEditPost(item.id) && (
                    <TouchableOpacity onPress={() => {
                      setPatchingPost(item.id)
                      setPatchTitle(item.title)
                    }} disabled={deleteMutation.isPending}>
                      <Text style={styles.patchBtn}>Patch Title</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => deleteMutation.mutate(item.id)} disabled={deleteMutation.isPending}>
                    <Text style={[styles.deleteBtn, deleteMutation.isPending && styles.disabledText]}>
                      {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 16 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 8 },
  textArea: { height: 80 },
  button: { backgroundColor: '#333', padding: 12, borderRadius: 6, alignItems: 'center', marginBottom: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  disabledBtn: { backgroundColor: '#ccc', opacity: 0.6 },
  disabledText: { opacity: 0.6 },
  card: { backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 6, borderWidth: 1, borderColor: '#ddd' },
  userId: { fontSize: 11, color: '#999', marginBottom: 2 },
  title: { fontWeight: 'bold', marginBottom: 4 },
  body: { color: '#555' },
  actions: { flexDirection: 'row', gap: 12, marginTop: 6 },
  editBtn: { color: '#007AFF' },
  patchBtn: { color: '#FF9500' },
  deleteBtn: { color: '#FF3B30' },
  cancel: { color: '#999', marginTop: 4 },
  filterRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  filterInput: { flex: 1, marginBottom: 0 },
  clearBtn: { backgroundColor: '#ddd', padding: 10, borderRadius: 6 },
  clearBtnText: { color: '#333' },
  error: { color: '#FF3B30', marginBottom: 8, padding: 8, backgroundColor: '#FFE5E5', borderRadius: 4, borderLeftWidth: 4, borderLeftColor: '#FF3B30' },
  success: { color: '#34C759', marginBottom: 8, padding: 8, backgroundColor: '#E5F9E5', borderRadius: 4, borderLeftWidth: 4, borderLeftColor: '#34C759' },
})