import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useEffect } from "react"

export default function AppTextarea(props) {
  const { ref, id, label, defaultValue, word } = props

  useEffect(() => {
    ref.current.value = defaultValue
  }, [word, defaultValue])

  return (
    <div className="grid w-full gap-1.5">
      <Label className="mb-1 h-fit" htmlFor={id}>
        {label}
      </Label>
      <Textarea ref={ref} id={id} />
    </div>
  )
}
