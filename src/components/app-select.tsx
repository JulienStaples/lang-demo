import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

type AppSelectProps = {
  placeholder: string
  action: ({ key }: { key: string }) => void
  items: { key: string; text: string }[]
}

export default function AppSelect(props: AppSelectProps) {
  const { placeholder, action, items } = props

  const [value, setValue] = useState<string>("")

  return (
    <Select
      onValueChange={(item: { key: string; text: string }) => (
        setValue(item.text), action(item)
      )}
    >
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
