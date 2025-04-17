import { createRoot } from 'react-dom/client';
import App from './App';

import "uikit/dist/css/uikit.min.css";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
const root = createRoot(document.getElementById('root'));
root.render(<App />);