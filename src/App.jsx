import Main from "./app/Main";

import { Provider } from 'react-redux';
import { store } from './state/store';

const App = () => {
  return(
    <Provider store={store}>
      <Main></Main>
    </Provider>
  )
}

export default App