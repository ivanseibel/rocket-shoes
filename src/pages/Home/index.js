import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import shoes from '../../assets/images/shoes.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={shoes} alt="Tênis" />
        <strong>Running shoes</strong>
        <span>$39.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img src={shoes} alt="Tênis" />
        <strong>Running shoes</strong>
        <span>$39.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img src={shoes} alt="Tênis" />
        <strong>Running shoes</strong>
        <span>$39.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img src={shoes} alt="Tênis" />
        <strong>Running shoes</strong>
        <span>$39.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img src={shoes} alt="Tênis" />
        <strong>Running shoes</strong>
        <span>$39.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img src={shoes} alt="Tênis" />
        <strong>Running shoes</strong>
        <span>$39.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
