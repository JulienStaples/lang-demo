import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function AppSelect(props) {
  const placeholder = props.placeholder
  const action = props.action
  const items = props.items

  const [value, setValue] = useState("")

  return (
    <Select onValueChange={(item) => (setValue(item.text), action(item))}>
      <SelectTrigger className="max-w-[180px]">
        <SelectValue placeholder={placeholder}>{value}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => {
          return (
            <SelectItem key={item.key} value={item}>
              {item.text}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
