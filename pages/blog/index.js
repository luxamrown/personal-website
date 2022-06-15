import { useRouter } from 'next/router'
import React from 'react'
import BlogPage from '../../components/blog'
import Layout from '../../components/layout'

export default function Blog(props) {
    const {dataArticle} = props
    const {Data} = dataArticle

  return (
    <div className='blog'>
      <Layout pageTitle={"Blog"}>
        <BlogPage data={Data} />
      </Layout>
    </div>
  )
}

export async function getServerSideProps(){
    const result = await fetch(process.env.URL_GET_ALL_POST)
    const dataArticle = await result.json()
    return {
        props:{
            dataArticle,
        }
    }
}
