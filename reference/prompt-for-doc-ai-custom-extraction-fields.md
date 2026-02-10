# Prompt for Document AI: Dynamic Customer Extraction Fields Guide

## Task

สร้างเอกสารคู่มือการใช้งาน "Dynamic Customer Extraction Fields" feature เป็นภาษาไทยสำหรับเว็บไซต์ https://docs.dealdroid.net ในหมวด **AI Tuning**

## Target Audience

- เจ้าของ Droid ที่ต้องการให้ AI ดึงข้อมูลจากลูกค้าแบบกำหนดเอง
- ผู้ใช้ที่เคยใช้ default fields (name, phone, email, address, city, zipcode) และต้องการเพิ่มฟิลด์พิเศษ
- ระดับความรู้: Non-technical users ที่คุ้นเคยกับการใช้งาน DealDroid พื้นฐาน

## Document Style

- **Language**: ภาษาไทย
- **Approach**: Concept-first → อธิบายว่า feature นี้คืออะไร ทำไมถึงมี ทำอะไรได้ แล้วค่อยสอนวิธีใช้ทีละขั้นตอน
- **Tone**: เป็นกันเอง เข้าใจง่าย ไม่ technical จนเกินไป
- **Structure**: เหมือนกับเอกสารอื่นๆ ใน docs.dealdroid.net เช่น https://docs.dealdroid.net/tuning/brand-voice/ และ https://docs.dealdroid.net/tuning/when-ai-think/

## Feature Overview

### What is Dynamic Customer Extraction Fields?

ฟีเจอร์ที่ให้เจ้าของ Droid **กำหนด field พิเศษ** ที่ต้องการให้ AI ดึงข้อมูลจากข้อความของลูกค้าได้เอง นอกเหนือจาก 6 fields พื้นฐาน (name, phone, email, address, city, zipcode) ที่มีอยู่แล้ว

**ตัวอย่าง custom fields:**

- Budget (งบประมาณ)
- Company or organization (บริษัท/องค์กร)
- Purchase timeline (ต้องการสินค้าเมื่อไหร่)
- Preferred contact channel (ช่องทางติดต่อที่ชอบ)
- Referral source (รู้จักเราได้อย่างไร)

### Why use this feature?

- **ปรับแต่งให้เหมาะกับธุรกิจ**: แต่ละธุรกิจมีข้อมูลที่สำคัญแตกต่างกัน เช่น
  - ร้านขายสัตว์เลี้ยง → ต้องการรู้ "ชื่อสัตว์เลี้ยง" และ "อายุสัตว์เลี้ยง"
  - ร้าน B2B → ต้องการรู้ "ชื่อบริษัท" และ "งบประมาณโครงการ"
  - ร้านอาหาร → ต้องการรู้ "จำนวนคน" และ "วันที่ต้องการจอง"
- **AI ฉลาดขึ้น**: เมื่อ AI รู้จักลูกค้ามากขึ้น จะตอบได้ตรงจุดและเป็นส่วนตัวมากขึ้น
- **ไม่สูญเสีย context**: ข้อมูลที่ AI ดึงได้จะถูกเก็บไว้ใน customer profile ใช้ได้ทุกครั้งที่คุยต่อ
- **Additive feature**: ไม่กระทบกับ fixed fields เดิม ทำงานควบคู่กัน

### How it works

1. เจ้าของ Droid กำหนด custom extraction fields ในหน้า Business Rules
2. แต่ละ field ต้องระบุ:
   - **Name**: ชื่อ field (เช่น "Budget", "Pet name")
   - **Guide**: คำอธิบายให้ AI เข้าใจว่าจะดึงข้อมูลอะไร (เช่น "Customer's budget amount as a number")
   - **Enable/Disable**: เปิด-ปิดการ extract แต่ละ field
3. เมื่อลูกค้าคุยกับ AI พิมพ์ข้อมูลที่เกี่ยวข้อง (เช่น "งบไม่เกิน 5000 บาท")
4. AI จะดึงข้อมูลตาม fields ที่เปิดใช้งาน และบันทึกลง customer profile
5. AI จะใช้ข้อมูลนี้ในการตอบคำถามต่อๆ ไป

### Constraints & Limitations

- **สูงสุด 10 fields** per droid
- **ทุก extracted value เป็น string**: แม้ว่าจะเป็นตัวเลขหรือวันที่ ค่าที่เก็บจะเป็น text (เช่น `"5000"`, `"2026-02-09"`)
- **Guide ทำหน้าที่แทน type**: ไม่มี dropdown เลือก text/number/date แต่ใช้คำอธิบายใน guide แทน
- **ไม่มี direct edit**: ต้องการแก้ไข field → ลบแล้วสร้างใหม่
- **Orphaned data ไม่หาย**: ถ้าลบ field ข้อมูลเก่าที่ดึงไว้แล้วจะยังคงอยู่ (แค่หยุดการ extract ใหม่)

## Default Extraction Fields

ทุก Droid ใหม่จะได้ 5 default extraction fields มาให้ (ปิดการใช้งานทั้งหมดตั้งแต่แรก):

1. **Preferred contact channel**
   - Guide: "Customer's preferred way to be contacted beyond current chat (e.g., LINE, WhatsApp, phone call, email)"
   - Enable: false

2. **Budget**
   - Guide: "Customer's stated budget or spending limit (e.g., 5000 baht, under $100, no budget limit)"
   - Enable: false

3. **Company or organization**
   - Guide: "Customer's company name, shop name, or organization they represent"
   - Enable: false

4. **Purchase timeline**
   - Guide: "When the customer needs the product (e.g., urgent, this week, next month, just browsing)"
   - Enable: false

5. **Referral source**
   - Guide: "How the customer found the business (e.g., friend recommendation, Instagram, Google, TikTok, advertisement)"
   - Enable: false

**หมายเหตุ**: ผู้ใช้สามารถเปิดใช้งาน แก้ไข หรือลบ fields เหล่านี้ได้ตามต้องการ

## Content Structure (ที่ document AI ควรสร้าง)

### 1. Introduction (แนะนำ)

- อธิบายว่า feature นี้คืออะไร
- ทำไมถึงมีประโยชน์
- ใครควรใช้
- แตกต่างจาก fixed fields อย่างไร

### 2. Use Case Scenarios (ตัวอย่างการใช้งานจริง)

สร้าง 2-3 scenarios ที่เป็นประโยชน์ เช่น:

**Scenario 1: ร้านขายสินค้า E-commerce**

- ต้องการเก็บ "Budget", "Purchase timeline", "Referral source"
- เปิดใช้ fields เหล่านี้
- ตัวอย่างบทสนทนา:
  - ลูกค้า: "อยากได้โน้ตบุ๊กราคาไม่เกิน 30,000 บาท ใช้ทำงาน ต้องการใช้ภายในสัปดาหน์หน้า"
  - AI: ตอบแนะนำสินค้า
  - ผลลัพธ์: AI ดึงได้ `Budget: "30,000 baht"`, `Purchase timeline: "next week"`

**Scenario 2: ร้าน Pet Shop**

- สร้าง custom fields ใหม่: "Pet name", "Pet type", "Pet age"
- ตัวอย่างบทสนทนา:
  - ลูกค้า: "ผมชื่อสุนัย มีหมาชื่อบราวนี่ อายุ 3 ขวบ ต้องการอาหารหมาด่วนมาก"
  - AI: ตอบแนะนำอาหารสุนัข
  - ผลลัพธ์: AI ดึงได้ `Name: "สุนัย"`, `Pet name: "บราวนี่"`, `Pet age: "3 ขวบ"`, `Purchase timeline: "urgently"`

**Scenario 3: บริการ B2B**

- ใช้ "Company or organization", "Budget", "Purchase timeline"
- อธิบายว่า AI จะดึงข้อมูลองค์กรและงบโครงการได้อย่างไร

### 3. How to Set Up Extraction Fields (วิธีตั้งค่า)

#### 3.1 การเข้าถึงหน้า Business Rules

- ไปที่ Settings → Business Rules
- หา section "Custom Information Extraction" หรือชื่อที่ใช้จริง
- [Screenshot placeholder: Business Rules page]

#### 3.2 การเปิดใช้งาน Default Fields

- แสดงรายการ 5 default fields
- อธิบายว่าแต่ละ field คืออะไร
- วิธีเปิด-ปิด toggle
- ปุ่ม "Add all default fields" ทำอะไร
- [Screenshot placeholder: List of default fields with toggle switches]

#### 3.3 การสร้าง Custom Field ใหม่

- กดปุ่ม "+ Add Field"
- กรอก 2 อย่าง:

  **Name** (ชื่อ field):
  - ความยาว: สูงสุด 50 ตัวอักษร
  - ต้อง unique (ไม่ซ้ำกับ fields อื่น, case-insensitive)
  - **ตัวอย่างที่ดี**: "Pet name", "Budget", "Delivery date", "Number of guests"
  - **ควรหลีกเลี่ยง**: ชื่อที่คลุมเครือ เช่น "Info", "Data", "Details"

  **Guide** (คำอธิบายสำหรับ AI):
  - ความยาว: สูงสุด 200 ตัวอักษร
  - **สำคัญมาก**: Guide คือสิ่งที่ AI ใช้เพื่อตัดสินใจว่าจะดึงข้อมูลอะไร
  - **เขียนให้ชัดเจน เฉพาะเจาะจง** พร้อมตัวอย่าง

  **ตัวอย่าง Guide ที่ดี:**
  - ❌ "Customer budget" (คลุมเครือ)
  - ✅ "Customer's stated budget or spending limit (e.g., 5000 baht, under $100, no budget limit)"
  - ❌ "Pet information" (กว้างเกินไป)
  - ✅ "Customer's pet name (e.g., Brownie, Fluffy, Max)"
  - ❌ "Date" (ไม่ชัด)
  - ✅ "Date the customer needs delivery (e.g., next Monday, Feb 15, urgent)"
  - ✅ "Number of people for dining reservation (e.g., 2 people, party of 10)"
  - ✅ "Customer's company name, shop name, or organization they represent"

  **Tips สำหรับเขียน Guide:**
  - ใส่ตัวอย่างค่าที่คาดหวังด้วย `(e.g., ...)`
  - อธิบายว่าเป็นตัวเลข วันที่ หรือ text ถ้าจำเป็น (แทน type dropdown)
  - ระบุให้ชัดถ้า field มีหลายรูปแบบ (เช่น "urgent" หรือ "next week")

- กด Save/เพิ่ม
- [Screenshot placeholder: Add field form with Name and Guide inputs]

#### 3.4 การจัดการ Fields

- **เปิด-ปิด field**: ใช้ toggle switch
- **ลบ field**: กดปุ่มลบ (ข้อมูลเก่าที่ดึงไว้แล้วไม่หาย)
- **แก้ไข field**: ไม่มี edit โดยตรง → ต้อง**ลบแล้วสร้างใหม่**
- **ข้อจำกัด**: สามารถมีได้สูงสุด 10 fields
- **Counter**: แสดง "X / 10 fields" เพื่อดูจำนวนที่เหลือ
- [Screenshot placeholder: Field list with delete buttons and counter]

### 4. How to Test Extraction (วิธีทดสอบ)

**ขั้นตอนการทดสอบแบบละเอียด:**

1. **ไปที่หน้าที่มี Test Panel**
   - ไปหน้า Product, Document, Sale Script หรือหน้าอื่นที่มี test chat panel ด้านขวา
   - [Screenshot placeholder: Product page with chat panel on the right]

2. **เปิด Test Chat**
   - กดปุ่มเพื่อเปิด chat simulator (ถ้ายังไม่เปิด)

3. **พิมพ์ข้อความทดสอบ**
   - พิมพ์ข้อความที่มีข้อมูลที่ต้องการให้ AI ดึง
   - **ตัวอย่างที่ 1**: "ผมชื่อสุนัย ต้องการอาหารหมาด่วนมาก"
   - **ตัวอย่างที่ 2**: "สนใจโน้ตบุ๊กงบไม่เกิน 30,000 บาท ต้องการใช้สัปดาหน์หน้า"
   - กด Send

4. **รอ AI ตอบกลับ**
   - AI จะตอบคำถามตามปกติ
   - [Screenshot placeholder: AI response in chat]

5. **ตรวจสอบข้อมูลที่ดึงได้**
   - **กดปุ่ม `i` (info icon)** บนหน้า chat หรือ customer card
   - Card จะ **flip ไปด้านหลัง** (flip animation)
   - [Screenshot placeholder: Flip animation showing customer info back side]
6. **ดูข้อมูลที่ AI ดึงได้**
   - จะเห็น section "Custom Information" หรือชื่อที่ใช้จริง
   - แสดง fields ที่มีค่า เช่น:
     ```
     Name: สุนัย
     Purchase timeline: urgently
     ```
   - **ถ้าไม่มีข้อมูลเลย**: section จะไม่แสดง
   - [Screenshot placeholder: Customer info panel showing extracted fields]

7. **ตรวจสอบว่าถูกต้องหรือไม่**
   - ผลที่คาดหวังจากตัวอย่างที่ 1:
     - `Name: "สุนัย"` (ถ้าเปิดใช้งาน name field)
     - `Purchase timeline: "urgently"` (ถ้าเปิดใช้งาน Purchase timeline field)
   - ถ้าผลไม่ตรง → ลองปรับ Guide ให้ชัดเจนขึ้น

**Test Cases เพิ่มเติม:**

- ลองพิมพ์ข้อความที่**ไม่มี**ข้อมูลที่ต้อง extract → ไม่ควรดึงอะไรเลย
- ลองพิมพ์ข้อความที่มีหลาย fields ในครั้งเดียว → ดูว่า AI ดึงครบหรือไม่
- ลองปิด field แล้วทดสอบใหม่ → ไม่ควรดึง field ที่ปิดไว้

### 5. Viewing and Editing Extracted Data (ดูและแก้ไขข้อมูลที่ดึงได้)

#### 5.1 การดูข้อมูลในหน้า Chat

- ไปที่ Chat page (หน้าคุยกับลูกค้าจริง)
- เลือก customer
- กดปุ่ม `i` เพื่อ flip customer card
- ดูได้ใน section "Custom Information"

#### 5.2 การแก้ไขข้อมูลด้วยตนเอง

- ใน customer detail panel สามารถแก้ไข/ลบค่าแต่ละ field ได้
- เหมาะสำหรับกรณีที่ AI ดึงผิดหรือข้อมูลเปลี่ยน
- กด Save เพื่อบันทึก

#### 5.3 การรีเซ็ตข้อมูล

- ข้อมูล custom extraction จะถูกรีเซ็ตเมื่อ:
  - ใช้ "Clear intents and shopping cart" function
  - (อธิบายเพิ่มเติมตาม UI จริง)

### 6. How AI Uses Extracted Information (AI ใช้ข้อมูลนี้อย่างไร)

- AI จะนำข้อมูลที่ดึงได้**รวมเข้ากับ Customer Profile**
- ข้อมูลจะถูก**บันทึกถาวร** ในระบบ (ไม่สูญหายเมื่อปิดแชท)
- ใน conversation ต่อๆ ไป AI จะ**จดจำข้อมูล**และตอบได้ตรงจุดขึ้น
- ตัวอย่าง:
  - ลูกค้าบอกครั้งแรก: "งบไม่เกิน 5000 บาท"
  - AI บันทึก: `Budget: "5000 baht"`
  - ลูกค้าถามครั้งต่อไป: "มีรุ่นไหนอีกบ้าง"
  - AI จะแนะนำเฉพาะสินค้าที่ราคาไม่เกิน 5000 บาท (โดยไม่ต้องถามซ้ำ)

### 7. Best Practices (แนวทางที่แนะนำ)

#### เลือก Fields ที่เหมาะกับธุรกิจ

- อย่าเปิดทุก field → เปิดเฉพาะที่**จำเป็นจริงๆ**
- ถามตัวเองว่า: "ข้อมูลนี้ช่วยให้ AI ตอบดีขึ้นหรือไม่?"

#### เขียน Guide ให้ดี

- **ใส่ตัวอย่างเสมอ** → ช่วยให้ AI เข้าใจดีขึ้น
- **ชัดเจน เฉพาะเจาะจง** → "Pet's name" ดีกว่า "Pet info"
- **ระบุ format** → "Date in format MM/DD" หรือ "Number without currency"

#### ทดสอบก่อนใช้จริง

- ทดสอบใน test panel ก่อนเสมอ
- ลองหลายๆ แบบ: ข้อความสั้น ยาว มีหลาย fields ไม่มี fields
- ปรับ Guide ถ้าผลไม่ตรง

#### จัดการ Fields อย่างมีระเบียบ

- ตั้งชื่อให้เข้าใจง่าย (ภาษาอังกฤษหรือไทยก็ได้)
- ลบ fields ที่ไม่ใช้แล้ว → ทำให้ AI ทำงานเร็วขึ้น
- อย่าเกิน 10 fields → ยิ่งมากยิ่ง complex

#### เมื่อไหร่ควรปิด Field

- ถ้าไม่ต้องการข้อมูลนั้นแล้ว
- ถ้า AI ดึงผิดบ่อย → ลองปรับ Guide ก่อน ถ้ายังไม่ได้ก็ปิด
- ถ้าไม่มีลูกค้าให้ข้อมูลนั้นเลย

### 8. Troubleshooting (แก้ปัญหา)

#### AI ไม่ดึงข้อมูล

- ✅ เช็คว่า field **เปิดใช้งาน**หรือยัง (toggle = ON)
- ✅ ดู Guide ว่าชัดเจนพอหรือไม่ → ลองเพิ่มตัวอย่าง
- ✅ ข้อความลูกค้า**มีข้อมูลจริงๆ** หรือไม่

#### AI ดึงข้อมูลผิด

- ✅ ปรับ Guide ให้ชัดเจนขึ้น พร้อมตัวอย่าง
- ✅ ลองใส่คำว่า "extract only ..." ใน Guide
- ✅ ถ้ายังไม่ได้ → ติดต่อ support

#### ไม่เห็น Section "Custom Information"

- ✅ ต้องมี**อย่างน้อย 1 field ที่มีค่า** → ถ้าไม่มีเลย section จะไม่แสดง
- ✅ กดปุ่ม `i` เพื่อ flip card

#### ต้องการแก้ไข Field Name หรือ Guide

- ⚠️ **ไม่มี edit โดยตรง**
- **วิธีแก้**: ลบ field เดิม → สร้าง field ใหม่ (ข้อมูลเก่าไม่หาย)

#### เกิน 10 Fields แล้ว

- ลบ fields ที่ไม่ใช้
- หรือรวม fields ที่คล้ายกัน (เช่น รวม "Pet name" และ "Pet type" เป็น "Pet information")

### 9. Technical Note (สำหรับผู้ใช้ขั้นสูง - optional)

- ข้อมูลทั้งหมดเก็บเป็น **string** เสมอ (ไม่มี type casting)
- AI ใช้ **parallel extraction** → ไม่เพิ่ม latency
- ถ้าปิดทุก field → AI จะ**ไม่ทำงานเลย** (zero overhead)
- การลบ field ไม่ลบข้อมูล → orphaned data ยังอยู่ (ปลอดภัย)

### 10. Related Features (ฟีเจอร์ที่เกี่ยวข้อง)

- **Fixed Contact Fields**: Name, Phone, Email, Address, City, Zipcode → อธิบายความแตกต่าง
- **Customer Profile**: ดูข้อมูลลูกค้าทั้งหมดรวมกัน
- **Business Rules**: ตั้งค่าพฤติกรรม AI อื่นๆ

---

## Screenshot Placeholders Needed

(Document AI จะเขียน detailed alt text สำหรับแต่ละ screenshot)

1. **Business Rules page** - หน้า settings แสดง Extraction Fields section
2. **Default fields list** - รายการ 5 default fields พร้อม toggle
3. **Add field form** - ฟอร์มสร้าง field ใหม่ (Name, Guide inputs)
4. **Field counter** - แสดงว่าใช้ไป X / 10 fields
5. **Product page with test panel** - หน้า product พร้อม chat panel ด้านขวา
6. **Chat conversation** - บทสนทนาทดสอบ พิมพ์ "ผมชื่อสุนัย ต้องการอาหารหมาด่วนมาก"
7. **Flip animation** - กดปุ่ม i แล้ว card flip ไปด้านหลัง
8. **Extracted info display** - แสดง custom information section พร้อมค่าที่ดึงได้
9. **Manual edit panel** - หน้าแก้ไขข้อมูล custom fields ด้วยตนเอง
10. **Field management** - delete field button และ counter

## Technical Details from PR-01

จาก PR-01 document มีรายละเอียด technical ดังนี้ (ให้ document AI เลือกใช้ตามความเหมาะสม):

### Data Structure

```typescript
interface ExtractionField {
  name: string; // max 50 chars, unique (case-insensitive)
  guide: string; // max 200 chars
  enable: boolean; // AI extracts only when true
}
```

### Storage

- **Droid**: เก็บ `extractionFields` (array of ExtractionField) max 10 items
- **Customer**: เก็บ `customExtractedInfo` (Record<string, string>) เช่น `{ "Budget": "5000 baht" }`

### AI Pipeline

- **IntentAgent** detect ว่ามีข้อมูลที่ต้อง extract หรือไม่ → return `has_extractable_info: boolean`
- **ExtractingAgent** ทำงานเฉพาะเมื่อ `has_extractable_info === true`
- Extraction ทำงาน **parallel** กับ retrievers อื่น → ไม่เพิ่ม latency
- ถ้าไม่มี enabled fields → skip ทันที (zero overhead)

### Edge Cases

- ลบ field แล้ว → ข้อมูลเก่ายังอยู่ (orphaned data) แค่หยุด extract ใหม่
- Duplicate names → validate ทั้ง UI + server (case-insensitive)
- LLM return garbage → return `{}`, log warning, pipeline ไม่ block
- Disabled field → ไม่มี prompt overhead, ไม่เรียก LLM

## Examples from Code

ใช้ตัวอย่างจาก `DEFAULT_EXTRACTION_FIELDS` ดังนี้:

1. **Preferred contact channel**
   - Name: "Preferred contact channel"
   - Guide: "Customer's preferred way to be contacted beyond current chat (e.g., LINE, WhatsApp, phone call, email)"

2. **Budget**
   - Name: "Budget"
   - Guide: "Customer's stated budget or spending limit (e.g., 5000 baht, under $100, no budget limit)"

3. **Company or organization**
   - Name: "Company or organization"
   - Guide: "Customer's company name, shop name, or organization they represent"

4. **Purchase timeline**
   - Name: "Purchase timeline"
   - Guide: "When the customer needs the product (e.g., urgent, this week, next month, just browsing)"

5. **Referral source**
   - Name: "Referral source"
   - Guide: "How the customer found the business (e.g., friend recommendation, Instagram, Google, TikTok, advertisement)"

## Validation Rules (for reference)

- **Name**: max 50 chars, required, unique (case-insensitive), trim whitespace
- **Guide**: max 200 chars, required, trim whitespace
- **Array**: max 10 items per droid
- **Enable**: boolean, default false

## Tone & Style Guidelines

- ใช้ **ภาษาไทยเป็นกันเอง** แต่ชัดเจน
- **หลีกเลี่ยง jargon** ที่ non-technical users อาจไม่เข้าใจ (เช่น "JSON", "schema", "API")
- **ใช้ตัวอย่างชีวิตจริง** → ร้านขายของ ร้านสัตว์เลี้ยง ร้านอาหาร
- **อธิบายเหตุผล** ไม่ใช่แค่บอกว่า "ทำอย่างนี้" แต่บอกว่า "ทำไมต้องทำ"
- **ใช้ emoji น้อยๆ** (ถ้ามี) เฉพาะที่จำเป็น เช่น ✅ ❌
- **แบ่ง section ชัดเจน** ด้วย headings
- **ใช้ list, bullet points** แทนย่อหน้ายาวๆ
- **Code blocks** ใช้เฉพาะตัวอย่าง data structure (ถ้าจำเป็น)

## Final Notes

- Document AI มีอิสระในการเรียงลำดับเนื้อหา แต่ต้องครบตาม structure ข้างต้น
- Screenshot placeholders ต้องมี **detailed alt text** เพื่อให้ทีม documentation ถ่ายภาพได้ตรง
- ตัวอย่าง use case ควร **realistic และเข้าใจง่าย**
- ถ้ามีส่วนใดที่ไม่แน่ใจ ให้ยึดตาม **pattern ของ docs.dealdroid.net** ที่มีอยู่แล้ว

---

**Output Format**: Markdown file เหมาะสำหรับเผยแพร่บน docs.dealdroid.net
**Target Word Count**: 2,000 - 3,000 คำ (ไม่นับ code blocks)
**Estimated Reading Time**: 10-15 นาที
