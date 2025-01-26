import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { QRCodeSVG } from 'qrcode.react'

const QRCode = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 flex justify-center items-center p-8 border rounded-lg">
        <div className="grid gap-8 text-center">
          <div className="space-y-6">
            {/* Make the QR Code larger by setting the size */}
            <QRCodeSVG value="https://reactjs.org/" size={256} />
            <h4 className="font-medium leading-none text-lg mt-8">Scan to Join</h4> {/* Added margin-top for more space above the text */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default QRCode
