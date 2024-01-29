import React, { useState, useEffect } from 'react';
import Layout from "./Layouts";
import { getProducts } from "./apiCore";
import Card from './Card'; 
import Search from './Search';

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    }).catch(error => {
      console.error("Error loading products by sell:", error);
      setError("Error loading products by sell");
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    }).catch(error => {
      console.error("Error loading products by arrival:", error);
      setError("Error loading products by arrival");
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="PromptHub"
      description=" a vibrant marketplace for buying and selling prompts."
      className="container-fluid"
    >
      {error && <div className="alert alert-danger">{error}</div>}
      <Search/>
      <h2 className='mb-4'>New Arrival</h2>
      <div className='row'>
        {productsByArrival.map((product, i) => (
          <div className="col-4 mb-3">
          <Card key={i} product={product}/> 
          </div>
        ))}
      </div>

      <h2 className='mb-4'>Best Sellers</h2>
      <div className='row'>
        {productsBySell.map((product, i) => (
          <div className="col-4 mb-3">
          <Card key={i} product={product}/> 
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
