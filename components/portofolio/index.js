import { useRouter } from 'next/dist/client/router'
import { Button } from 'react-bootstrap'
import Head from 'next/head'

export default function Portofolio() {
  const router = useRouter()
  const handleRenderPage = () =>{
    router.push('/portofolio/render')
  }

  return (
    <>
    <Head>
    <title>
    Mohamad El Abror | Portfolio
    </title>
    </Head>
      <div className='text-center portfolio-crossing'>
          <Button onClick={handleRenderPage} variant="outline-light text-secondary border-0 border-start border-end portfolio-crossing-text m-2" className='animation-text-right'>3D Renders</Button>
          <Button variant="outline-light border-0 border-start border-end portfolio-crossing-text m-2" className='animation-text'><a className='text-decoration-none text-secondary' rel='noreferrer' target="_blank" href="https://github.com/luxamrown">Code</a></Button>
      </div>
    </>
  )
}
