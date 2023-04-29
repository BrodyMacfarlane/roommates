import RentCalc from '@/components/RentCalc'
import { PageContainer } from '@/components/Container'
import Header from '@/components/Header'

export default function Rent() {
  return (
    <PageContainer>
      <Header />
      <div className='rent-calculator-outer-container'>
        <RentCalc />
      </div>
    </PageContainer>
  )
}