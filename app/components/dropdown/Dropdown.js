import DropdownItems from "./DropdownItems"

export default function Dropdown(props) {
  const title = props.title
  const items = props.items

  return (
    <div className="group relative rounded-md bg-teal-900 px-1">
      <span>{title}</span>
      <div className="invisible absolute z-40 w-fit bg-slate-700 opacity-50 duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
        {<DropdownItems items={items} />}
      </div>
    </div>
  )
}
