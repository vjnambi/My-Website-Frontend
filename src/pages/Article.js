import Banner from '../components/Banner'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';

export async function loader({params}){
    const rawData = await axios.get(`https://vjnambiapi.azurewebsites.net/article/${params.articleId}`)
    const articleData = rawData.data[0]
    return {articleData}
}

function Article() {
    const {articleData} = useLoaderData()
    return (
        <>
            <Banner />
            <div className='background'>
                <div className='main'>
                    {articleData.title}
                </div>
            </div>
        </>
    )
}

export default Article