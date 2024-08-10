import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

function Cart() {
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeToCard = ( id ) => {
        //dispatch a remove action 
        dispatch(remove(id))
    }

    const cards = products.map(product => (
        <div className='col-md-12 mb-4'>
       <Card key={product.id} className='h-100'>
       <div className='text-center p-3'>
       <Card.Img variant="top" src={product.image} style={{ width: '100px', height:'130px'}}/>
        <Card.Body>
          <Card.Title>{ product.title }</Card.Title>
          <Card.Text className='text-success fs-5'>
           INR: { product.price}
          </Card.Text>
        </Card.Body>
      
        <Button variant="danger" onClick={() => removeToCard(product.id)}>Remove</Button>
       
       </div>
      </Card>
        </div>
    ));

    return (
        <div>
            { products.length > 0 ?
              (
                <div className='row'>
                  { cards }
               </div>
              ):
              (
                <div className='text-center mt-4'>
                    <h4 className='text-primary'>Please select products to add to the cart.</h4>
                </div>
            )}
        </div>
    );
}

export default Cart;