import { StyledBlogList } from '@/styles';
import { BlogTypes } from 'src/types/blogs';
import PostsListItem from './PostsListItem';

const PostList = (props: { blogs: BlogTypes[] }) => {
  const { blogs } = props;
  return (
    <StyledBlogList>
      {blogs &&
        blogs.map((blog) => {
          return <PostsListItem key={blog.id} blog={blog} />;
        })}
    </StyledBlogList>
  );
};

export default PostList;
