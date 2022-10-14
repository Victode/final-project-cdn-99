import { useEffect, useState, useContext } from 'react';
import Shop from './Shop';
import { DataContext } from '../contexts/DataProvider';

export default function ShopList() {
    const { products } = useContext(DataContext)

    return (
        <div>
            { products.map((product) => <Shop shop={product} preview={true} key={product.id} />) }
        </div>
    )
}