# Gateprint SDK

This SDK enables cloud applications to send print jobs directly to local thermal printers via GatePrint House. Make sure to install GatePrint House on your device before using this SDK.

# Install

## via ESM if you use javascript modern

```bash
npm install github:mkhsnw/gateprint-client
```

## via CDN if you use script tag in html

```html
<script src="https://cdn.jsdelivr.net/gh/mkhsnw/gateprint-client@v1.1.0/dist/GatePrint.js"></script>
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
<script src="https://cdn.jsdelivr.net/gh/mkhsnw/gateprint-client@v1.1.0/dist/GatePrint.js"></script>
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
