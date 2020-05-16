import axios from 'axios'

const baseUrl = "https://hacker-news.firebaseio.com/v0/"
const storyUrl = `${baseUrl}item/`
const newStoriesUrl = `${baseUrl}newstories.json`

export const getNewStoriesIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data)
    // console.log(result);
    return result
}

export const getStory = async (storyID) => {
    const result = await axios
        .get(`${storyUrl}${storyID}.json`)
        .then(({ data }) => data && selectFields(data))
    // console.log(result);
    return result
}



export const selectFields = ({ id, by, url, time, title } = {}) => ({
    id,
    by,
    url,
    time,
    title
})