import Header from './components/header'
import { Provider } from 'react-redux'
import store from './redux/store'
import Main from './components/main'
import Footer from './components/footer'

function App() {

  return (
    <Provider store={store}>
      <Header/>
      <Main/>
      <Footer/>
    </Provider>

  )
}

export default App
