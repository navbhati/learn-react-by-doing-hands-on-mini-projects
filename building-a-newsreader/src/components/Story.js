import React, { useState, useEffect } from 'react';
import { getStory } from '../api'
import randomcolor from 'randomcolor'

export const Story = (props) => {

    const [story, setStory] = useState({})

    useEffect(() => {
        async function fetchData() {
            let s = await getStory(props.storyId).then(d => d)
            //console.log(s);
            if (s != null) {
                setStory(s)
            }
        }

        fetchData()
    }, [])

    /* 
    {
    "by": "oic",
    "descendants": 0,
    "id": 23078470,
    "score": 1,
    "time": 1588674822,
    "title": "How to Protect Your Application with OpenAM and OpenIG Stack",
    "type": "story",
    "url": "https://www.openidentityplatform.org/blog/how-to-add-authorization-with-openam-openig"
    }
    */

    return story.url ? (
        <div className="card border">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            < div className="card-header" style={{ backgroundColor: `${randomcolor()}` }}> {story.title}</div >
            <div className="card-body">
                <a href={story.url} className="btn btn-primary" target="blank">Learn more...</a>
            </div>
            <div className="card-footer">
                <p>By: {story.by}</p>
                <p>Time: {new Date(story.time).toUTCString()}</p>
            </div>
        </div >) : null
}