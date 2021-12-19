import { getPosts } from "../lib/functions"
import Link from "next/link"



const IndexPage = (props) => (
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default IndexPage;

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}