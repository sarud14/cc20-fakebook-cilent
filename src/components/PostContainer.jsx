import CreatePost from "./CreatePost"

function PostContainer() {
  return (
    <div className="w-[600px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-100">
      <CreatePost />
    </div>  
  )
}
export default PostContainer