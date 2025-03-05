export default function DropdownItems(props) {
  const items = props.items

  let dropdownItems = items.map((item) => {
    return (
      <p
        key={item.key}
        id={item.key}
        onClick={item.action}
        className="cursor-pointer select-none text-nowrap border-b-2 border-black p-3 duration-100 ease-in-out hover:bg-slate-800 active:bg-slate-900"
      >
        {item.value}
      </p>
    )
  })

  return dropdownItems
}
