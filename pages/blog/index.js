import React from 'react'
import BlogPage from '../../components/blog'
import Layout from '../../components/layout'

export default function Blog() {
  return (
    <div className='blog'>
      <Layout pageTitle={"Blog"}>
        <BlogPage/>
      </Layout>
    </div>
  )
}

