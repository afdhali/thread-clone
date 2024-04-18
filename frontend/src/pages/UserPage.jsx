import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";

export function UserPage() {
  const { user, loading } = useGetUserProfile();
  const { username } = useParams();
  const showToast = useShowToast();

  const [posts, setPosts] = useState([]);
  const [fetchingPosts, setFetchingPosts] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setFetchingPosts(true);
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        // console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPosts([]);
      } finally {
        setFetchingPosts(false);
      }
    };

    getPosts();
  }, [username, showToast]);

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  if (!user && !loading) return <h1>User Not Found</h1>;

  return (
    <>
      <UserHeader user={user} />
      {/* <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Lets Talk about Threads"
      />
      <UserPost
        likes={451}
        replies={881}
        postImg="/post2.png"
        postTitle="Nice tutorial..."
      />
      <UserPost
        likes={1500}
        replies={1000}
        postImg="/post3.png"
        postTitle="I Love this Guy"
      /> */}
      {!fetchingPosts && posts.length === 0 && <h1>User has no Posts</h1>}
      {fetchingPosts && (
        <Flex justifyContent={"center"} my={12}>
          <Spinner size={"xl"} />
        </Flex>
      )}
      {posts.map((post) => {
        return <Post key={post._id} post={post} postedBy={post.postedBy} />;
      })}
    </>
  );
}
