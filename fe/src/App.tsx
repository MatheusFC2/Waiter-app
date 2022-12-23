/* eslint-disable react/react-in-jsx-scope */
import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  );
}
