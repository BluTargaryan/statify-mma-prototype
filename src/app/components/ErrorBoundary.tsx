import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-gray-100 rounded">
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-800">Something went wrong</h2>
            <p className="text-sm text-gray-600">Please try refreshing the page</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 