import Banner from '../components/Banner'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';

export async function loader({params}){
    const rawData = [{"id":1,"title":"Test Title","text":"Test Text","createdAt":"2023-03-05T03:06:57.000Z","updatedAt":"2023-03-05T03:06:57.000Z"},{"id":2,"title":"Test Title 2","text":"Test Text 2","createdAt":"2023-03-05T03:08:24.000Z","updatedAt":"2023-03-05T03:08:24.000Z"}]//await axios.get(`http://localhost:3001/article/${params.articleId}`)
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