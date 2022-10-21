import { useEffect, useState, useContext } from 'react';
import Cart from './Cart';
import { DataContext } from '../contexts/DataProvider';

export default function CartList() {
    const { carts } = useContext(DataContext)

    return (
        <div>
            { carts.map((post) => <Cart post={post} preview={true} key={post.id} />) }
        </div>

    )
}