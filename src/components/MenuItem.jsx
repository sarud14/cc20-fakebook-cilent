function MenuItem(props) {

  const {icon: Icon, text, ...resProps} = props

  return (
    <button className="btn bg-amber-50/0 border-none shadow-none justify-start gap-2 hover:opacity-20 w-full">
      <Icon {...resProps} />
      {text}
    </button>
  )
}
export default MenuItem