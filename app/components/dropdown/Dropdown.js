import DropdownItems from "./DropdownItems"

export default function Dropdown(props) {
  const title = props.title
  const items = props.items

  return (
    <div className=" group absolute top-0 left-10">
      <span>{title}</span>
      <div className=" invisible opacity-50 group-hover:opacity-100 absolute group-hover:visible bg-slate-700 w-fit z-40 duration-100 ease-in-out">
        {<DropdownItems items={items} />}
      </div>
    </div>
  )
}
