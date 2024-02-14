type Category = {
  name: string
}

export type Post = {
  title: string,
  slug: string,
  description: string,
  published: boolean,
  categories: Category[]
}
