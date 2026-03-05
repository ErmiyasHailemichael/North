function FeatureToggle(props) {
  if (props.isEnabled) {
    return <p>{props.featureName}</p>;
  }

  return <p>Feature {props.featureName} is disabled</p>;
}

export default FeatureToggle;