import * as React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigation from './src/navigations/RootNavigation'
import { store } from './src/store'

function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  </Provider>
  );
}

export default App
