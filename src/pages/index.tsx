import RentCalc from '@/components/RentCalc'
import { PageContainer } from '@/components/Container'
import Header from '@/components/Header'
import { HomeLink } from '@/components/Link'

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <HomeLink text='Rent Calculator' href='/rent' />
      <HomeLink text='Housekeeping' href='/housekeeping' />
    </PageContainer>
  )
}
