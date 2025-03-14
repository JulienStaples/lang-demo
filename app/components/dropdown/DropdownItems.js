export default function DropdownItems(props) {
  const items = props.items

  let dropdownItems = items.map((item) => {
    return (
      <p
        key={item.key}
        id={item.key}
        onClick={item.action}
        className="cursor-pointer select-none text-nowrap border-b-2 border-rose-950 p-3 duration-100 ease-in-out hover:bg-rose-950 active:bg-rose-800"
      >
        {item.value}
      </p>
    )
  })

  return dropdownItems
}
