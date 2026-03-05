import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div>
      <h1>Feature Toggle Demo</h1>

      <h2>Normal Cases</h2>
      <FeatureToggle isEnabled={true} featureName="Dark Mode" />
      <FeatureToggle isEnabled={false} featureName="Push Notifications" />
      <FeatureToggle isEnabled={true} featureName="User Authentication" />

      <h2>Edge Cases</h2>
      <FeatureToggle isEnabled={false} featureName="" />
      <FeatureToggle isEnabled={true} featureName="Feature with a very long name that goes on and on" />
      <FeatureToggle isEnabled={false} featureName="Feature@#$%" />
    </div>
  );
}

export default App;