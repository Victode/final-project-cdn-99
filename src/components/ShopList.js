import { useEffect, useState, useContext } from 'react';
import Post from './Shop';
import { DataContext } from '../contexts/DataProvider';

export default function PostList() {
    const { posts } = useContext(DataContext)

    return (
        <div>
            { posts.map((post) => <Post post={post} preview={true} key={post.id} />) }
        </div>
    )
}