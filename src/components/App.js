import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoriesArr } from '../reducers/categories';
import '../blocks/app/app.css';
import Header from './Header';

function App() {
  const categoriesArr = useSelector((state) => state.categories.categoriesArr);
  const dispatch = useDispatch();

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
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
