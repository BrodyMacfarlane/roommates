import { PageContainer } from '@/components/Container'
import Header from '@/components/Header'

export default function Custom404() {
  return (
    <PageContainer>
      <Header />
      <div className='w-full text-center my-16'>
        <h1 className='my-4 text-4xl sm:text-6xl'>404</h1>
        <p className='my-4'>Page not found, bruh.</p>
      </div>
    </PageContainer>
  )
}