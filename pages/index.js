import Head from "next/head";

const posts = [
  {title: "Post title", excerpt: "post excerpt"},
  {title: "Second post title", excerpt: "second post excerpt"}
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((p, i) => (
          <div key="{item}">
            {p.title}
            {p.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}