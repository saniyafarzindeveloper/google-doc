import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import React from 'react'

export default function DropDownMenu() {
  return (
     <Button variant="ghost" size="icon" className="rounded-full">
               <MoreVertical className="size-4"/>
            </Button> 
  )
}
