import { useQuery } from '@tanstack/react-query'

const fetchFacts = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/facts?limit=5')
  if (!response.ok) {
    throw new Error('Failed to fetch dog facts')
  }
  return response.json()
}

function DogFacts() {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['facts'],
    queryFn: fetchFacts,
  })

  if (isPending) return <p className="status">Loading facts...</p>
  if (isError) return <p className="status error">Error: {error.message}</p>

  return (
    <section>
      <h2>Dog Facts</h2>
      <ul className="facts-list">
        {data.data.map((fact) => (
          <li key={fact.id}>{fact.attributes.body}</li>
        ))}
      </ul>
      <button className="refetch-btn" onClick={() => refetch()}>Load New Facts</button>
    </section>
  )
}

export default DogFacts