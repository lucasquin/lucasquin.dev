<script lang="ts">
  import LinkGroup from "$lib/components/LinkGroup.svelte";
  import type LinkGroupProps from "$lib/interfaces/LinkGroupProps";
  import Summary from "$lib/components/Summary.svelte";
  import type SummaryProps from "$lib/interfaces/SummaryProps";

  const summaryProps: SummaryProps = {
    text: "This is my personal website, you can find here most of the code and ideas I came up with during my extra-professional time.",
    ariaLabel: "Summary of the information"
  };

  const lists: LinkGroupProps = {
    title: "Lists",
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
    title: "Posts",
    links: [
      {
        label: "Implementing Simple Paxos Consensus Algorithm With Rust",
        href: "/posts/test",
        target: "_self",
        date: "2024/02/24"
      },
    ]
  };
</script>

<Summary {summaryProps} />
<LinkGroup linkGroupProps={lists} />
<LinkGroup linkGroupProps={posts} />
