import { PostPage as Post, PostPageProps } from "@/templates/blog";

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />;
}
