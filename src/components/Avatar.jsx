import DefaultImg from "../assets/Default-avatar.png"
import { DropDownIcon } from "../icons"

function Avatar(props) {
  const {imgSrc, menu, bottom, right, ...resProps} = props
  return (
    <div className="avatar items-center cursor-pointer">
      <div {...resProps}>
          <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
      {menu && 
      <DropDownIcon className="absolute w-4" style={{right: right, bottom: bottom}}/>
      }
    </div>
  )
}
export default Avatar