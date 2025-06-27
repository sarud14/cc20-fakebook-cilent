import DefaultImg from "../assets/Default-avatar.png"
import { DropDownIcon } from "../icons"

function Avatar(props) {
  const {imgSrc, menu, ...resProps} = props
  return (
    <div className="avatar items-center cursor-pointer">
      <div {...resProps}>
          <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
      {menu && 
      <DropDownIcon className="absolute top-10 -right-0.5 w-4"/>
      }
    </div>
  )
}
export default Avatar