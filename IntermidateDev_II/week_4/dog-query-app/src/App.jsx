import BreedsList from './components/BreedsList'
import DogFacts from './components/DogFacts'
import DogGroups from './components/DogGroups'

function App() {
  return (
    <div className="app">
      <h1>Dog Query App</h1>
      <p className="subtitle">Powered by TanStack Query + Dog API</p>
      <hr />
      <DogFacts />
      <hr />
      <DogGroups />
      <hr />
      <BreedsList />
    </div>
  )
}

export default App