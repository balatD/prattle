import Navigation from '../components/page/navigation';
import Post from '../components/elements/post/post';
import PostForm from '../components/elements/post/postForm';
import type PostResponse from '../types/elements/post-response';

const getData = async () => {
  const res = await fetch(process.env.STRAPI_API_ENDPOINT + '/posts?populate=*')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const posts = await getData();

  return (
    <>
      <Navigation />

      <div className='mr-10 ml-10 space-y-10'>
        <PostForm />
        {
          posts.data.map((postResponse: PostResponse) => {
            return (
              <Post key={postResponse.id} id={postResponse.id} post={postResponse.attributes} />
            )
          })
        }
      </div>
    </>
  )
}
