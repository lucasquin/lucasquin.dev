import type { Link } from "$lib/types/Links"

export default interface LinkGroupProps {
  title?: string;  // previous title for link
  row: boolean;    // render in row or column
  links: Link[];   // links with label
}
