import Grid from "@mui/material/Grid";
import { FeaturedPost, MainFeaturedPost } from "..";

const featuredPosts = [
    {
        title: "Featured post",
        date: "Nov 12",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://picsum.photos/160/263",
        imageLabel: "Image Text",
    },
    {
        title: "Post title",
        date: "Nov 11",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://picsum.photos/160/263",
        imageLabel: "Image Text",
    },
    {
        title: "Post title333",
        date: "Nov 11",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://picsum.photos/160/263",
        imageLabel: "Image Text",
    },
    {
        title: "Post title23",
        date: "Nov 11",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://picsum.photos/160/263",
        imageLabel: "Image Text",
    },
];

export const Home = () => {
    return (
        <main>
            <MainFeaturedPost />
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </main>
    );
};
