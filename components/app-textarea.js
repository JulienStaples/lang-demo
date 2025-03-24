import React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function AppTextarea(props) {
  const ref = props.ref
  const id = props.id
  const label = props.label
  const defaultValue = props.defaultValue

  return (
    <div className="grid w-full gap-1.5">
      <Label className="mb-1 h-fit" htmlFor={id}>
        {label}
      </Label>
      <Textarea ref={ref} id={id} defaultValue={defaultValue} />
    </div>
  )
}
