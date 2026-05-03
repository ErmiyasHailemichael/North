import { useQuery } from '@tanstack/react-query'

const fetchGroups = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/groups')
  if (!response.ok) {
    throw new Error('Failed to fetch dog groups')
  }
  return response.json()
}

function DogGroups() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['groups'],
    queryFn: fetchGroups,
  })

  if (isPending) return <p className="status">Loading groups...</p>
  if (isError) return <p className="status error">Error: {error.message}</p>

  return (
    <section>
      <h2>Dog Groups</h2>
      <ul className="group-list">
        {data.data.map((group) => (
          <li key={group.id} className="group-item">
            <strong>{group.attributes.name}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DogGroups