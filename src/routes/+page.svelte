<script lang="ts">
  import LinkGroup from "$lib/components/LinkGroup.svelte";
  import type LinkGroupProps from "$lib/interfaces/LinkGroupProps";

  const lists: LinkGroupProps = {
    title: "lists",
    links: [
      {
        label: "List of Awesome Youtube Channels",
        href: "/lists/list-of-awesome-youtube-channels",
        target: "_self"
      },
      {
        label: "List of Awesome Talks",
        href: "/lists/list-of-awesome-talks",
        target: "_self"
      }
    ]
  };

  const posts: LinkGroupProps = {
    title: "posts",
    links: [
      {
        label: "Post 1",
        href: "/posts/post-1",
        target: "_self"
      },
      {
        label: "Post 2",
        href: "/lists/post-2",
        target: "_self"
      }
    ]
  };
</script>

<section>
  <summary>whatever description</summary>
</section>

<LinkGroup linkGroupProps={lists} />
<LinkGroup linkGroupProps={posts} />
