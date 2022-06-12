import React from 'react'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

const PricingPage = () => {
    return (
        <MainLayout>
          <h1>Pricing page</h1>
          <h1 className={'title'}>
            Ir a <Link href="/about">Pricing</Link>
          </h1>
    
          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/pricing.js</code>
          </p>
        </MainLayout>
    )
}

export default PricingPage