import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { aid } = router.query;

    return <p>article: {aid}</p>;
};

export default Post;
