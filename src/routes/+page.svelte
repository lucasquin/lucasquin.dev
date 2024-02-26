<script lang="ts">
  import LinkGroup, { type ILinkGroup } from "$lib/components/LinkGroup.svelte";
  import Summary, { type ISummary } from "$lib/components/Summary.svelte";

  export let data;

  const summary: ISummary = {
    text: "This is my personal website, you can find here most of the code and ideas I came up with during my extra-professional time.",
    ariaLabel: "Summary of the information"
  };

  const lists: ILinkGroup = {
    title: "Lists",
    row: false,
    links: [
      {
        label: "List of Awesome Youtube Channels",
        href: "/lists/list-of-awesome-youtube-channels",
        target: "_self",
        underline: true
      },
      {
        label: "List of Awesome Podcasts",
        href: "/lists/list-of-awesome-podcasts",
        target: "_self",
        underline: true
      }
    ]
  };

  const posts: ILinkGroup = {
    title: "Posts",
    row: false,
    links: data.posts.map((post) => {
      return {
        label: post.title,
        date: post.date,
        href: post.url,
        target: "_self",
        underline: true
      };
    })
  };
</script>

<Summary props={summary} />
<LinkGroup props={lists} />
<LinkGroup props={posts} />
