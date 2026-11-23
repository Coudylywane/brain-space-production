import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class Studio3DErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Studio3D error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="studio-3d studio-3d--loading">
          La scène 3D n'a pas pu être chargée.
        </div>
      );
    }

    return this.props.children;
  }
}