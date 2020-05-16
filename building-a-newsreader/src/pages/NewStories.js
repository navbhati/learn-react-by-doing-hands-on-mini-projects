import React, { useState, useEffect } from 'react';
import { getNewStoriesIds, getStory } from '../api'
import { Story } from '../components/Story';
import { useInfiniteScroll } from '../hook/useInfiniteScroll';

export const NewStories = () => {

    const [storyIds, setStoriesIds] = useState([])
    const { count } = useInfiniteScroll()

    useEffect(() => {

        console.log(count);

        async function fetchData() {
            let data = await getNewStoriesIds()
            // console.log(data);
            setStoriesIds(data)
        }
        fetchData()
    }, [])

    return (
        <div className="container mt-2">
            <h1 className="text-center">Hackers News New Stories</h1>
            <div className="card-columns mt-5">
                {
                    storyIds.slice(0, count).map((storyId) => (
                        <Story key={storyId} storyId={storyId} />
                    ))
                }
            </div>
        </div >)
}