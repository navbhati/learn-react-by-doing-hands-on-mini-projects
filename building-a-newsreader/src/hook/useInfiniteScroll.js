import { useState, useEffect, memo } from 'react';
import { debounce } from '../utils/debounce'
import { STORY_INCREMENT, MAX_STORIES } from '../constants'

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(STORY_INCREMENT)

    const handelScroll = debounce(() => {
        if (window.innerHeight
            + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight
            || loading) {

            //console.log(window.innerHeight);
            //console.log(document.documentElement.scrollTop);
            //console.log(document.documentElement.offsetHeight);
            return false
        }
        setLoading(true)
    }, 500)

    useEffect(() => {

        if (!loading) return
        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES)
        } else {
            setCount(count + STORY_INCREMENT)
        }
        setLoading(false)
    }, [loading])


    useEffect(() => {
        window.addEventListener(`scroll`, handelScroll)
        return () => window.removeEventListener(`scroll`, handelScroll)
    }, [])

    return { count }
}