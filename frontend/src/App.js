import logo from './logo.svg';
import './App.css';
import Header from './componets/Header'
import Footer from './componets/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ArticleScreen from './screens/ArticleScreen'

function App() {
  return (
    <Router>
      <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/article/:id" component={ArticleScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
