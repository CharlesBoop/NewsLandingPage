import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '62caa97d87mshfb4b1c3f126bab2p1807f4jsn4414cd0c3901'
    }
};

function Page(){
    const url = 'https://bing-news-search1.p.rapidapi.com/news'
    const [news, setNews] = useState(null)

    useEffect(() =>{
        axios.get(url,options)
        .then(response => {
                setNews(response.data)
        })
    }, [url])

    if (news){
        return(
            <div>

                <h1>News</h1>
                <div className="wrapper">
                    {news.value.map((element) => {
                        return(
                            <Card
                            key={element.datePublished}
                            img = {element.image.thumbnail.contentUrl}
                            date = {element.datePublished}
                            title = {element.name}
                            info = {element.description}
                            url = {element.url}
                            type = {element._type}
                            />
                            )
                        })}
                </div>
            </div>
        )        
    }

    return(
        <div>

        </div>
    )


}
export default Page;

