import { useQuery } from '@tanstack/react-query'

const fetchBreedById = async (id) => {
  const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch breed details')
  }
  return response.json()
}

function BreedDetail({ id }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['breed', id],
    queryFn: () => fetchBreedById(id),
    enabled: !!id,
  })

  if (isPending) return <p className="status">Loading details...</p>
  if (isError) return <p className="status error">Error: {error.message}</p>

  const breed = data.data.attributes

  return (
    <div className="breed-detail">
      <h3>{breed.name}</h3>
      <p><strong>Description:</strong> {breed.description || 'No description available.'}</p>
      <p><strong>Life Expectancy:</strong> {breed.life?.min}–{breed.life?.max} years</p>
      <p><strong>Male Weight:</strong> {breed.male_weight?.min}–{breed.male_weight?.max} kg</p>
      <p><strong>Female Weight:</strong> {breed.female_weight?.min}–{breed.female_weight?.max} kg</p>
      <p><strong>Hypoallergenic:</strong> {breed.hypoallergenic ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default BreedDetail