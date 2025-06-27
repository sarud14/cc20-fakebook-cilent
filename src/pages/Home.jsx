import PostContainer from "../components/PostContainer";
import SidebarContact from "../components/SidebarContact";
import SidebarMenu from "../components/SidebarMenu";

export default function Home() {
  return (
    <>
      <SidebarMenu />
      <PostContainer />
      <SidebarContact />
    </>
  );
}
