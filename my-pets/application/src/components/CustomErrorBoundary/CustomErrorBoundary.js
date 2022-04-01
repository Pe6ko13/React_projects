import React from "react";

export default class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFormError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error from componentDidCatch: ", error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Big Error!</h2>;
    }
    return this.props.children;
  }
}
