"use client"

import * as C from './styled';

import { useEffect, useState } from 'react';

import api from '@/api/Ping';
import Header from '../components/Header';
import CategoryItem from '@/components/CategoryItem';
import ProductItem from '@/components/ProductItem';
import Modal from '@/components/Modal';
import ModalProduct from '@/components/ModalProduct';

let searchTimer = null;

export default ({ children }) => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalpages, setTotalPages] = useState(0);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState('');

  const getProducts = async () => {
    const prod = await api.getProducts(activeCategory, activePage, activeSearch);
    if (prod.error == '') {
      setProducts(prod.result.data);
      setTotalPages(prod.result.pages);
      setActivePage(prod.result.page);
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      setCategories(cat.result);
      if (cat.error == '') {
        setCategories(cat.result);
      }
    }
    getCategories();
  }, []);

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000)
  }, [headerSearch]);

  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [activeCategory, activePage, activeSearch]);

  const handleProductClick = (data) => {
    setModalStatus(true);
    setModalData(data);
  }
  return (
    <C.Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 &&
        <C.CategoryArea>
          Selecione uma categoria
          <C.CategoryList>
            <CategoryItem
              data={{
                id: 0,
                name: 'Todas as categorias',
                image: '/assets/food-and-restaurant.png'
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((x, key) => (
              <>
                <CategoryItem
                  key={key}
                  data={x}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              </>
            ))}
          </C.CategoryList>
        </C.CategoryArea>
      }
      {products.length > 0 &&
        <C.ProductArea>
          <C.ProductList>

            {products.map((x, key) => (
              <ProductItem key={key} data={x} click={handleProductClick} />
            ))}
          </C.ProductList>
        </C.ProductArea>
      }

      {totalpages > 0 &&
        <C.ProductPaginationArea>
          {Array(totalpages).fill(0).map((x, key) => (
            <C.ProductPaginationItem
              key={key}
              active={activePage}
              current={key + 1}
              onClick={() => setActivePage(key + 1)}
            >
              {key + 1}
            </C.ProductPaginationItem>
          ))}
        </C.ProductPaginationArea>
      }
      <Modal status={modalStatus} setModalStatus={setModalStatus}>
        <ModalProduct data={modalData} setModalStatus={setModalStatus} />
      </Modal>
      {children}
    </C.Container>
  )
}