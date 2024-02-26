export async function load({ params }: any) {
  const post = await import(`../../posts/${params.url}.md`)
  return {
    content: post.default,
    meta: post.metadata
  }
}
