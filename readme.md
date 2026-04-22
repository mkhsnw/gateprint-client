# Gateprint SDK

This SDK enables cloud applications to send print jobs directly to local thermal printers via GatePrint House. Make sure to install GatePrint House on your device before using this SDK.

# Install

## via ESM if you use javascript modern

```bash
npm install github:mkhsnw/gateprint-client
```

## via CDN if you use script tag in html

```html
<script src="https://cdn.jsdelivr.net/gh/mkhsnw/gateprint-client@v1.2.1/dist/GatePrint.js"></script>
```

# List Functional Gateprint

## Text

```javascript
.text("Hello World")
```

## Align

```javascript
.align("left")
.align("center")
.align("right")
```

## Size

```javascript
.size(2, 2) // width, height
```

## Underline

```javascript
.underline(true)
.underline(false)
```

## image from URL or API

```javascript
.imageUrl("https://example.com/image.png")
```

## image base64
``` javascript 
.image(base64String)
```

## QRCODE

```javascript
.qr("https://example.com")
```

or

```javascript
.qr({
  content: "https://example.com",
  size: 6
})
```

## Barcode

```javascript
.barcode("your-code", "UPC-A")
.barcode("your-code", "UPC-E")
.barcode("your-code", "EAN13")
.barcode("your-code", "EAN8")
.barcode("your-code", "CODE39")
.barcode("your-code", "ITF")
.barcode("your-code", "CODE128")
.barcode("your-code", "CODABAR")
```

## PDF417

```javascript
.pdf417("your-code", size) // default 3
```

\*\* some devices might not support printing on PDF417 Format

## Data Matrix

```javascript
.datamatrix("your-code", size) // default 3
```

\*\* some devices might not support printing on PDF417 Format

## Smooth (high quality)

```javascript
.smooth(true)
.smooth(false)
```

## Feed (space)

```javascript
.feed()      // default 3
.feed(2)
```

## Cut

```javascript
.cut()
```

## Print

```javascript
.print()
```

## Example

```javascript
// CDN
<script src="https://cdn.jsdelivr.net/gh/mkhsnw/gateprint-client@v1.2.1/dist/GatePrint.js"></script>
// ESM MODULE
import GatePrint from "gateprint-client"

cosnt printer = new GatePrint("YOUR-APP-KEY","HOSTNAME",port)

async function print(){
  await printer
  .align("center")
  .imageUrl("your image url")
  .size(2, 2)
  .feed(2)
  .text("TEST PRINT LOGO")
  .size(1, 1)
  .text("------------------------------------------")
  .align("left")
  .text("Item Test 1 ........ Rp 1.000")
  .underline(true)
  .align("center")
  .qr("your link")
  .text("BERHASIL!")
  .feed(3)
  .cut()
  .print();
}
print();
```
