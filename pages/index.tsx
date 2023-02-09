import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@components/Header';
import { Footer } from '@components/Footer'
import { Table } from '@components/Table'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>CIP-30</title>
      </Head>
      <div id="app" >
        <div className="bg-white dark:bg-black">
          <Header />
          <div className="h-20" />
          <Table />
          <div className="h-40" />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
