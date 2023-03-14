import React from 'react';
import axios from "axios";
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader({params}){
  const rawData = [{"id":1,"title":"Test Title","text":"Test Text","createdAt":"2023-03-05T03:06:57.000Z","updatedAt":"2023-03-05T03:06:57.000Z"}]//await axios.get(`http://localhost:3001/articles`)
  const articlesData = rawData //rawData.data
  return {articlesData}
}

function Articles() {
  const {articlesData} = useLoaderData()
  return (
    <>
        <Banner />
        <div className='background'>
          <div className='main'>
            <div className='container'>
              <div className='row row-cols 4'>
                {articlesData.map((n,i) => {
                  return <div key={i} className='col-3 align-items-center'>
                    <Link style={{color: 'black', textDecorationLine: 'none'}} to={`https://vjnambi.azurewebsites.net/article/${n.id}`}>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 className='card-title'>{n.title}</h5>
                          <p className='card-text'>{n.text}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
      })}
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Articles