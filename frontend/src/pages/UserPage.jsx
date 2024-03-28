import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

export function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
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
      />
    </>
  );
}
