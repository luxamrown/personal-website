import React from 'react'
import { useRouter } from 'next/router'
import ArticleDetails from '../../components/blog/articleDetail'
import Layout from '../../components/layout'

export default function PostDetail(props) {
    
    const router = useRouter()
    const {id} = router.query
    const {article} = props

  return (
    <Layout pageTitle={"Article"}>
        <ArticleDetails id={id} article={article}/>
    </Layout>
  )
}

export async function getStaticPaths(){
    const result = await fetch(process.env.URL_GET_ALL_POST)
    const dataArticle = await result.json()
    const {Data} = dataArticle
    
    const paths = Data.map((item) => ({
        params:{
            id:item.ArticleId
        }
    }))
    return {
        paths,
        fallback:true
    }
}

export async function getStaticProps(context){
    const {id} = context.params
    const result = await fetch(`${process.env.URL_GET_DETAIL_POST}/${id}`)
    const article = await result.json()
    return{
        props:{
            article,
        }
    }
}