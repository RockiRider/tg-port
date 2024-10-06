import Stack from "@/components/layouts/Stack";
import { Link } from "@/components/Link";
import Typography from "@/components/Typography";
import MyBlogPosts from "@/features/Admin/BlogPosts/MyBlogPosts";
import { Button } from "@mdxeditor/editor";

const CreateBlogPost = () => {

    <Stack justify="center" align="center" className="pt-6" gap={8}>
      <Typography variant="h1">My Blog Posts</Typography>
      <Link href="/admin/blog/create">
        <Button type="button">Create new</Button>
      </Link>
      <MyBlogPosts />
    </Stack>
};

export default CreateBlogPost;