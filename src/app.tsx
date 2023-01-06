import { createRoot } from 'react-dom/client';
import Home from './pages/Home';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Home />);
