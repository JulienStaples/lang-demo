import React from "react"
import { Textarea } from "@/src/components/ui/textarea"
import { Label } from "@/src/components/ui/label"

export default function AppTextarea(props) {
  const { ref, id, label, defaultValue } = props

  return (
    <div className="grid w-full gap-1.5">
      <Label className="mb-1 h-fit" htmlFor={id}>
        {label}
      </Label>
      <Textarea ref={ref} id={id} defaultValue={defaultValue} />
    </div>
  )
}
