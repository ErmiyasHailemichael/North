import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import BreedDetail from './BreedDetail'

const fetchBreeds = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/breeds')
  if (!response.ok) {
    throw new Error('Failed to fetch breeds')
  }
  return response.json()
}

function BreedsList() {
  const [selectedId, setSelectedId] = useState(null)

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  })

  if (isPending) return <p className="status">Loading breeds...</p>
  if (isError) return <p className="status error">Error: {error.message}</p>

  return (
    <section>
      <h2>Dog Breeds</h2>
      <ul className="breed-list">
        {data.data.map((breed) => (
          <li key={breed.id}>
            <button
              className="breed-btn"
              onClick={() => setSelectedId(breed.id === selectedId ? null : breed.id)}
            >
              {breed.attributes.name}
            </button>
            {selectedId === breed.id && <BreedDetail id={breed.id} />}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BreedsList