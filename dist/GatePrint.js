class GatePrint {
  constructor(appKey = "", ipAddr = "localhost", port = 9100) {
    this.appKey = appKey;
    this.commands = [];
    this.ipAddr = ipAddr;
    this.port = port;
  }

  // --- Teks & Dasar ---
  text(val) {
    this.commands.push({ action: "text", value: val });
    return this;
  }

  align(val) {
    // Nilai val: 'left', 'center', 'right'
    this.commands.push({ action: "align", value: val });
    return this;
  }

  underline(val = true) {
    // Package mect mensupport underline
    this.commands.push({ action: "underline", value: val });
    return this;
  }

  // --- Ukuran & Spasi ---
  size(w = 1, h = 1) {
    // w & h biasanya 1 sampai 8
    this.commands.push({ action: "size", value: [w, h] });
    return this;
  }

  // --- Media (QR, Barcode, Image) ---
  qr(val, size = 6) {
    this.commands.push({ action: "qr", value: { content: val, size: size } });
    return this;
  }

  // Support Barcode (mect/go-escpos support Code39, ITF, EAN13, dll)
  barcode(content, type = "CODE39") {
    this.commands.push({ action: "barcode", value: { content, type } });
    return this;
  }

  image(base64Str) {
    this.commands.push({ action: "image", value: base64Str });
    return this;
  }

  imageUrl(url) {
    this.commands.push({ action: "imageUrl", value: url });
    return this;
  }

  // --- Kertas ---
  feed(lines = 3) {
    this.commands.push({ action: "feed", value: lines });
    return this;
  }

  cut() {
    this.commands.push({ action: "cut", value: true });
    return this;
  }

  smooth(val = true) {
    this.commands.push({ action: "smooth", value: val });
    return this;
  }

  pdf417(content, size = 3) {
    this.commands.push({
      action: "pdf417",
      value: { content: content, size: size },
    });
    return this;
  }

  datamatrix(content, size = 3) {
    this.commands.push({
      action: "datamatrix",
      value: { content: content, size: size },
    });
    return this;
  }

  async print() {
    const payload = {
      commands: this.commands,
    };

    try {
      const response = await fetch(`http://${this.ipAddr}:${this.port}/print`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "App-Key": this.appKey,
        },
        body: JSON.stringify(payload),
      });
      this.commands = [];

      if (!response.ok)
        throw new Error(
          "Error " + response.status + " : " + response.statusText,
        );
      return await response.json();
    } catch (err) {
      console.error("Local bridge not found or Error:", err);
      return { status: "error", message: err.message };
    }
  }
}

if (typeof window !== "undefined") {
  window.GatePrint = GatePrint;
}
