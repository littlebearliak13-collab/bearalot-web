/* ============================================================
   SLIPKIT — TEMPLATE DATA (single source of truth)
   ------------------------------------------------------------
   หน้าแรก (index.html) และหน้ารวม (templates.html) อ่านจากที่นี่
   เพิ่ม template ใหม่ → append object เข้า array TEMPLATES
   AUTO-GEN: GitHub Action push template ใหม่ขึ้นมาที่นี่ทุกวัน
   ============================================================ */

const TEMPLATES = [
  {
    id: 1,
    name: "Aurora Minimal",
    style: "Minimalist",
    desc: "สะอาด เรียบง่าย ตรงประเด็น ดีไซน์ไร้กาลเวลาสำหรับ Freelancer และ Creative Studio",
    tags: [
      { label: "Freelancer", bg: "#EEEDFE", color: "#534AB7" },
      { label: "Clean",      bg: "#F1EFE8", color: "#5F5E5A" }
    ],
    preview: {
      bg: "#F8F7FF",
      mini: {
        logo: "STUDIO",
        logoColor: "#1A1A2E",
        rows: [
          { label: "Design Service", value: "฿3,500" },
          { label: "Consulting",     value: "฿1,200" },
          { label: "VAT 7%",         value: "฿329"   }
        ],
        totalValue: "฿5,029"
      }
    }
  },
  {
    id: 2,
    name: "Vivid Pop",
    style: "Colorful / Vibrant",
    desc: "สีสันสดใส มีพลังงาน ดึงดูดสายตา เหมาะกับร้านค้า Retail และ Food & Beverage",
    tags: [
      { label: "Retail", bg: "#FAECE7", color: "#712B13" },
      { label: "Bold",   bg: "#FAEEDA", color: "#633806" }
    ],
    preview: {
      bg: "linear-gradient(135deg,#FFE4E1 0%,#FFF9E6 100%)",
      mini: {
        cardStyle: "background:linear-gradient(135deg,#FF6B6B,#FFE66D);border-radius:10px",
        logo: "SHOP!",
        logoColor: "#1A1A2E",
        lineColor: "rgba(26,26,46,0.2)",
        rows: [
          { label: "Product A", value: "฿299", color: "rgba(26,26,46,0.7)" },
          { label: "Product B", value: "฿450", color: "rgba(26,26,46,0.7)" }
        ],
        totalValue: "฿749",
        totalStyle: "border-color:#1A1A2E;color:#1A1A2E"
      }
    }
  },
  {
    id: 3,
    name: "Onyx Premium",
    style: "Dark / Premium",
    desc: "โทนเข้มหรูหรา สัมผัสความ Luxury ทุก pixel เหมาะกับแบรนด์ระดับสูงและ Agency",
    tags: [
      { label: "Luxury", bg: "#2C2C2A", color: "#D3D1C7" },
      { label: "Gold",   bg: "#FAEEDA", color: "#633806" }
    ],
    preview: {
      bg: "#1A1A2E",
      mini: {
        cardStyle: "background:#16213E;box-shadow:0 8px 24px rgba(0,0,0,0.4)",
        logo: "LUXE CO.",
        logoColor: "#EF9F27",
        lineColor: "rgba(255,255,255,0.1)",
        rows: [
          { label: "Package", value: "฿9,500", color: "rgba(255,255,255,0.5)" },
          { label: "Tax",     value: "฿665",   color: "rgba(255,255,255,0.5)" }
        ],
        totalValue: "฿10,165",
        totalStyle: "border-color:#EF9F27;color:#EF9F27"
      }
    }
  },
  {
    id: 4,
    name: "Nostalgic Press",
    style: "Retro / Vintage",
    desc: "กลิ่นอายวินเทจอบอุ่น เหมาะกับร้านกาแฟ Artisan และแบรนด์ Handmade สไตล์คลาสสิก",
    tags: [
      { label: "Café",    bg: "#FAEEDA", color: "#633806" },
      { label: "Artisan", bg: "#FAECE7", color: "#712B13" }
    ],
    preview: {
      bg: "#F5ECD7",
      mini: {
        cardStyle: "background:#FFFBF2;border:1.5px solid #D4A574",
        logo: "THE CAFÉ",
        logoColor: "#8B5E3C",
        logoExtra: "font-family:serif",
        lineColor: "#D4A574",
        rows: [
          { label: "Espresso",  value: "฿85", color: "#8B5E3C" },
          { label: "Croissant", value: "฿65", color: "#8B5E3C" }
        ],
        totalValue: "฿150",
        totalStyle: "border-color:#8B5E3C;color:#8B5E3C"
      }
    }
  },
  {
    id: 5,
    name: "Blueprint Pro",
    style: "Corporate / B2B",
    desc: "มืออาชีพ น่าเชื่อถือ มีระเบียบ เหมาะสำหรับองค์กรธุรกิจ B2B และงาน Consulting",
    tags: [
      { label: "Corporate", bg: "#E6F1FB", color: "#0C447C" },
      { label: "B2B",       bg: "#EAF3DE", color: "#27500A" }
    ],
    preview: {
      bg: "#EEF2F7",
      mini: {
        cardStyle: "background:#fff;border-top:3px solid #1A3A5C",
        logo: "CORPORATION LTD.",
        logoColor: "#1A3A5C",
        logoExtra: "font-size:0.7rem;letter-spacing:0.05em",
        lineColor: "#dde4ed",
        rows: [
          { label: "Consulting Fee", value: "฿25,000", color: "#444" },
          { label: "VAT 7%",         value: "฿1,750",  color: "#444" }
        ],
        totalValue: "฿26,750",
        totalStyle: "border-color:#1A3A5C;color:#1A3A5C"
      }
    }
  },
  {
    id: 6,
    name: "Doodle Studio",
    style: "Playful / Creative",
    desc: "สนุกสนาน มีชีวิต ดีไซน์ลื่นไหล เหมาะกับ Creative Studio งาน Event และแบรนด์เด็ก",
    tags: [
      { label: "Creative", bg: "#EEEDFE", color: "#534AB7" },
      { label: "Fun",      bg: "#FBEAF0", color: "#72243E" }
    ],
    preview: {
      bg: "linear-gradient(135deg,#E8D5F5 0%,#D5F0E8 100%)",
      mini: {
        cardStyle: "background:#fff;border-radius:12px;border:2px dashed #C4A7E7",
        logo: "🎨 STUDIO",
        logoColor: "#7C3AED",
        lineColor: "#EDE9FE",
        rows: [
          { label: "Workshop",  value: "฿490", color: "#7C3AED" },
          { label: "Materials", value: "฿150", color: "#7C3AED" }
        ],
        totalValue: "฿640",
        totalStyle: "border-color:#7C3AED;color:#7C3AED"
      }
    }
  },
  {
    id: 7,
    name: "Terra Craft",
    style: "Organic Minimal",
    desc: "ใบเสร็จโทนธรรมชาติอบอุ่น สื่อถึงความใส่ใจวัตถุดิบและสิ่งแวดล้อม เหมาะร้านกาแฟ เบเกอรี่ งานคราฟต์ และแบรนด์รักษ์โลก",
    tags: [
      { label: "Eco",   bg: "#E2EFD3", color: "#355E3B" },
      { label: "Craft", bg: "#F0E4D7", color: "#6B4E2E" }
    ],
    preview: {
      bg: "#F7F1E8",
      mini: {
        cardStyle: "background:#FBF8F1;border:1px solid #E8D9C1",
        logo: "ROOT BEAN",
        logoColor: "#6B4E2E",
        logoExtra: "font-family:Georgia,serif;letter-spacing:0.05em",
        lineColor: "#A67C52",
        rows: [
          { label: "Latte",     value: "฿120", color: "#355E3B" },
          { label: "Croissant", value: "฿95",  color: "#355E3B" }
        ],
        totalValue: "฿230",
        totalStyle: "border-color:#6B4E2E;color:#355E3B;font-weight:700"
      }
    }
  },
  {
    id: 8,
    name: "Bento Stack",
    style: "Bento / Modular",
    desc: "ดีไซน์แบบ bento grid โมดูลาร์ จัดข้อมูลเป็นช่องชัดเจน เหมาะแบรนด์ Tech, SaaS, Product launch และ Fintech",
    tags: [
      { label: "Tech",    bg: "#E5EDF5", color: "#1E3A5F" },
      { label: "Modular", bg: "#FEF3C7", color: "#7C5A00" }
    ],
    preview: {
      bg: "#F4F6FA",
      mini: {
        cardStyle: "background:#fff;border:1px solid #DCE3ED",
        logo: "STACK",
        logoColor: "#1E3A5F",
        logoExtra: "font-weight:800;letter-spacing:0.05em",
        lineColor: "#DCE3ED",
        rows: [
          { label: "Pro Plan", value: "$29", color: "#1E3A5F" },
          { label: "Add-ons",  value: "$12", color: "#1E3A5F" }
        ],
        totalValue: "$41",
        totalStyle: "border-color:#FBBF24;color:#1E3A5F;font-weight:800"
      }
    }
  }
];

/* ============================================================
   วิธีเพิ่ม template ใหม่ (สำหรับ phase 2 auto-gen):
   1. Append object เข้า array TEMPLATES ด้านบน
   2. id = ตัวเลขถัดไป (TEMPLATES.length + 1)
   3. fields ที่จำเป็น: id, name, style, desc, tags, preview
   ============================================================ */
