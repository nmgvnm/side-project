const express = require("express"); // express import
const test = require("../models/test");
const router = express.Router(); // express의 Router 사용
const multer = require('multer');
const exceljs = require('exceljs');

router.post("/test", async (req, res) => {
  try {
    const item = new test({
      name: req.body.name,
      number: req.body.number,
      code: req.body.code,
    });
    const newItem = await item.save()
    res.status(200).json({data : newItem, message : "test success"})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Multer 설정
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// 엑셀 파일 업로드 및 클라이언트에 데이터 전송
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const buffer = req.file.buffer;
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.getWorksheet(1);

    // 시트의 각 행을 반복하여 데이터 추출
    const rows = [];
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      const rowData = row.values;
      rows.push(rowData);
    });

    res.status(200).json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router; //export
