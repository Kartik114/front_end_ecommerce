// Wrap the App component with the Provider component and pass the Redux store
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';

const AppWithStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

export default AppWithStore