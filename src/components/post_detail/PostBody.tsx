import { MdxComponents } from '@/components/mdx';
import { Post } from '@/config/types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxOptions } from '@/config/mdx';

interface Props {
  post: Post;
}

export const PostBody = ({ post }: Props) => {
  return (
    <MDXRemote
      source={post.content}
      options={mdxOptions}
      components={MdxComponents}
    />
  );
};
