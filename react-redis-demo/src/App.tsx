import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RouterWrapper from './routers/RouterWrapper';
function App() {
  return (
    // <LayoutBase />
    <Router>
      <RouterWrapper />
    </Router>
  )
}

export default App
