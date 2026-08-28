1.Explain how and why you divided the app’s UI into components,
1.1 ผมมองภาพรวมของเว็ปไซต์ แตกออกมาเป็น component navbar และ หน้าหลัก มี home กับ owner
1.2 function สามารถรับ ข้อมูลจาก api มาโชว์ในตาราง สามารถเพิ่มและลบข้อมูลได้
1.3 ใช้ tailwind css และ daisy ui ในการ styling หน้าเว็ปให้สวยงาม
1.4 ใช้งาน http method เพื่อรับส่งงข้อมูลระหว่าง front end และ backend
1.5 เรียนรู้เรื่องการทำ pagination และการ ทำ modal เพิ่มขึ้น ให้ai ช่วยแนะนำ เรื่องการใช้ slice() method modal การแสดง success delete modal
2.What state variables did you created and why?,
สร้าง data เก็บdata จาก API
สร้าง formData สำหรับเก็บข้อมูลuser กรอกข้องมูล
Pagination
สร้าง currentPage ใช้บอกว่ากำลังอยู่ใช้งานอยู่หน้าไหนในหน้าไหนใน Paginatio
สร้าง postperPage ใช้กำหนดจำนวนรายการที่ต้องการแสดงผลต่อ 1 หน้า (ตั้งไว้ค่าเริ่มต้นคือ 10) แสดงรายการจาก 10ตัว
3.How did you manage these states? Was it via Passing Props or React Context, why?
จัดการข้อมูลผ่าน React context เพื่อมป้องกันการส่อง props drill และสะดวกต่อการอ่านโค๊ตไม่ต้องส่งผ่าน props ต่อๆ กันแบบเยอะๆ
4.Explain how and why you used the useEffect hook?
ป้องกันข้อมูลinfinity loop เนื่องจาก react จะ render ข้อมูลมาตลอด อาจจะทำให้ ram ของ browser กินข้อมูลมากเกินไปทำให้เว็ปทำงานไม่ได้
5.Explain whether you could and why, you would use fetch() without using useEffect?
ไม่ต้องใช้ก็ได้ เพราะ การข้อมูลไม่ได้เกิดขึ้นทันทีขณะใช้งานหน้าเว็ป แต่เกิดขึ้นตาม event ที่ user ทำกดใช้งาน เช่น กด submit form หรือ delete ข้อมูล
ในเหตุการณ์เหล่านี้ เราไม่ต้องรอให้ Component โหลดเสร็จก่อน แต่เราสั่งให้ fetch() ทำงานทันทีผ่าน Event Handler (เช่น onClick หรือ onSubmit) ได้เลย
6.Explain whether the use of fetch() should be synchronous or asynchronous JavaScript, why?
ต้องเป็น Asynchronous JavaScript (อิงตามหลักการของ Promises และ Async/Await) เสมอ และไม่สามารถทำเป็น Synchronous ได้
เพราะ ถ้าไม่ใช้ มันจะติด Promise เพราะ fetch() ต้องรอคอยสถานะจาก serverการสื่อสารกับเซิร์ฟเวอร์ภายนอกผ่านอินเทอร์เน็ต ซึ่งใช้เวลา (เช่น อาจจะ 100 มิลลิวินาที หรือหลักวินาที) หากบังคับให้เป็น Synchronous (ทำทีละบรรทัดแบบบล็อกการทำงาน) หน้าเว็บทั้งหมดจะค้างและหยุดนิ่ง (Freeze) ทำอะไรต่อไม่ได้จนกว่าเซิร์ฟเวอร์จะตอบกลับมา ซึ่งสร้างประสบการณ์ใช้งานที่แย่มาก
7.Include any other notes about React and Frontend Web Development you want to use to summarize your understanding of this technical domain . You can also note down questions you have.
ได้เข้าใจการใช้งาน HTTP request การทำ pagination
การรับข้อมูล ผู้ใช้งาน การเก็บค่า state การใช้งาน react provider และ การ slice ข้อมูลจาก api การใช้ daisyUI
