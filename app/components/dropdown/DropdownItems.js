export default function DropdownItems(props) {
  const items = props.items

  let dropdownItems = items.map((item) => {
    return (
      <p
        key={item.key}
        id={item.key}
        onClick={item.action}
        className=" text-nowrap hover:bg-slate-800 active:bg-slate-900 p-3 border-b-2 border-black cursor-pointer duration-100 ease-in-out select-none"
      >
        {item.value}
      </p>
    )
  })

  return dropdownItems
}
