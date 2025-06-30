import {
  DropDownIcon,
  FriendIcon,
  GroupIcon,
  MemoIcon,
  PlayIcon,
  SaveIcon,
} from "../icons";
import useUserStore from "../stores/userStores";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { Link } from "react-router";

function SidebarMenu() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:hidden">
      <Link to="/profile">
        <MenuItem
          icon={Avatar}
          text={`${user.firstName} ${user.lastName}`}
          className="w-11 h-11 rounded-full bg-slate-200"
          imgSrc={user.profileImage}
        />
      </Link>
      <Link to="/friends">
        <MenuItem icon={FriendIcon} text="Friends" className="w-10" />
      </Link>
      <MenuItem icon={MemoIcon} text="Memories" className="w-10" />
      <MenuItem icon={SaveIcon} text="Save" className="w-10" />
      <MenuItem icon={GroupIcon} text="Group" className="w-10" />
      <MenuItem icon={PlayIcon} text="Video" className="w-10" />
      <MenuItem icon={DropDownIcon} text="More..." className="w-10" />
    </div>
  );
}
export default SidebarMenu;
