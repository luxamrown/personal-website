import React from 'react'
import { useRouter } from 'next/router'
import ArticleDetails from '../../components/blog/articleDetail'
import Layout from '../../components/layout'

export default function PostDetail() {
    const router = useRouter()
    const {id} = router.query
  return (
    <Layout pageTitle={"Article"}>
        <ArticleDetails id={id}/>
    </Layout>
  )
}