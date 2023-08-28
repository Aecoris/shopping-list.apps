import { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    'kind avocado',
    'quiet peas',
    'serened salad',
    'joyful celery',
    'excited tomato',
    'happy spinach',
    'smiling carrot',
    'potato coach',
    'cheerful beetroot',
  ]);

  const [count, setCount] = useState(0);

  function addToBasket() {
    setCount((previousCount) => previousCount + 1);
  }

  function removeFromBasket() {
    setCount((previousCount) => {
      if (previousCount > 0) {
        return previousCount - 1;
      } else {
        return previousCount;
      }
    });
  }

  return (
    <main className="main">
      <header>
        <h1>My Shopping List</h1>
      </header>
      <section className="content">
        <p className="basket">
          <Basket
            count={count}
            productInBasket={count > 1 ? 'products' : 'product'}
          />
        </p>

        <Product
          products={products}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
        />

        <AddVeggie products={products} setProducts={setProducts} />
      </section>
    </main>
  );
}

////Child Components
function Basket({ count, productInBasket }) {
  return (
    <div className="basket">
      <h2>Basket</h2>
      <p>
        {count} {productInBasket} in basket
      </p>
    </div>
  );
}

function Product({ products, addToBasket, removeFromBasket }) {
  return (
    <div>
      <h2 className="product-title">Products</h2>
      <ul className="product">
        {products.map((product) => {
          return (
            <li key={product} className="each-product">
              <h3>{product}</h3>
              <p className="increment" onClick={() => addToBasket()}>
                +
              </p>
              <p className="decrement" onClick={() => removeFromBasket()}>
                -
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//Form
function AddVeggie({ products, setProducts }) {
  // useState
  const [newVeggie, setNewVeggie] = useState('');
  console.log(newVeggie);
  // prevent refresh page
  const handleAddVeggie = (event) => {
    event.preventDefault();
    // update state products
    setProducts((prevList) => {
      return [...prevList, newVeggie];
    });
    // clear the input
    setNewVeggie('');
  };

  return (
    <form className="form" onSubmit={handleAddVeggie}>
      <label>enter a new Product:</label>
      <input
        value={newVeggie}
        onChange={(event) => {
          setNewVeggie(event.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default App;
