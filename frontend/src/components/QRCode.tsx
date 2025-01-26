import React from 'react'

import { Card, CardContent } from "@/components/ui/card";
import {QRCodeSVG} from 'qrcode.react';


//        <QRCodeSVG value="https://reactjs.org/" />,

const QRCode = () => {
  return (
    <Card className="w-80 p-4">
      <CardContent className="flex flex-col items-center gap-4">
        {/* QR Code Image */}
        <QRCodeSVG value="https://reactjs.org/" />

        {/* Description */}
        <p className="text-sm text-gray-500">Scan to Join</p>

      </CardContent>
    </Card>
  )
}

export default QRCode
