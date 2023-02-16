import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Loading() {
  const { name: subdomain } = useRouter().query
  console.log(subdomain)
  // const response = await fetch(`https://www.${subdomain}.mintlify.app`).then((response) => response.json())
  return (
    <>
      <Head>
        <title>Loading</title>
        <meta
          name="description"
          content="Loading your docs..."
        />
      </Head>
      <div className="loading-container">
      <p>Loading your docs...</p>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}
