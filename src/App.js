import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoriesArr } from './reducers/categories';
import { useEffect } from 'react';

function App() {
  const categoriesArr = useSelector((state) => state.categories.categoriesArr)
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesArr = async () => {
      const data = await fetch(process.env.NODE_ENV === 'production' ? '/categories' : 'http://localhost:3000/categories');
      const json = await data.json();
      dispatch(setCategoriesArr(json));
    }
    getCategoriesArr();
  }, [])

  console.log(categoriesArr);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
