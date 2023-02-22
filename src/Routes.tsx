import { Routes as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export function Routes() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<Post />} />
    </Router>
  );
}
