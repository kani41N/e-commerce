import React from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import Alert from 'react-bootstrap/Alert';
import StatusCode from '../store/utils/StatusCode';

function Products() {
  // const [products, getProducts] = useState([]);

  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);

  useEffect(() => {
    //api call 
    // fetch('https://fakestoreapi.com/products')
    // .then(data => data.json())
    // .then(result => getProducts(result))    

    //dispatch in acrion for fetch methods
     dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING){
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR){
    return <Alert key='danger' variant='danger'>Something want wrong! Try again later</Alert>
  }

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product))

  };

  const cards = products.map(product => (
    <div className='col-md-3 mb-4' key={product.id}>
      <Card className='h-100'>
        <div className='text-center p-3'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className='text-success fs-5'>
              INR: {product.price}
            </Card.Text>
          </Card.Body>

          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>

        </div>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products Dashboard</h1>
      <div className='row mx-5 my-4'>
        {cards}
      </div>

    </>
  )
}

export default Products;
