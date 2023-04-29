import Housekeeping from '@/components/Housekeeping'
import { PageContainer } from '@/components/Container'
import Header from '@/components/Header'

export default function HousekeepingPage() {
  return (
    <PageContainer>
      <Header />
      <div className='rent-calculator-outer-container'>
        <Housekeeping />
      </div>
    </PageContainer>
  )
}