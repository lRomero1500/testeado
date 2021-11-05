import Api from "../api";
import {React,useState,useEffect} from 'react'

export default function PostsLists() {
    const [posts,setPosts]= useState({});
    useEffect(() => {
       
    }, [])
    return (
        <>
            {
                posts.map()
            }
        </>
    )
}
