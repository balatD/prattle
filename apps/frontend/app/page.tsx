async function getData() {
  const res = await fetch(process.env.STRAPI_API_ENDPOINT + '/posts?populate=*')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const posts = await getData()

  return (
    <>
      {
        posts.data.map((post) => {
          return (
            <h1 key={post}>{post.attributes.body}</h1>
          )
        })
      }
    </>
  )
}
