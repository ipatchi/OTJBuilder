import * as fs from 'fs';
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from 'docx';

const entry = {
  title: 'Maths Lecture',
  description: 'In this lecture we worked on adding stuff up',
  startDate: '12/4/24',
  endDate: '14/5/24',
  length: 26,
  type: 'lecture',
  ksbs: 'K1, K5, S7',
};

const entries = [entry];

const rows: TableRow[] = [];
entries.forEach((entry) => {
  rows.push(
    new TableRow({
      children: [
        new TableCell({
          width: {
            size: 2000,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph(entry.startDate),
            new Paragraph(entry.endDate),
          ],
        }),
        new TableCell({
          width: {
            size: 2000,
            type: WidthType.DXA,
          },
          children: [new Paragraph(entry.type)],
        }),
        new TableCell({
          width: {
            size: 2000,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph(entry.title),
            new Paragraph(entry.description),
            new Paragraph(entry.ksbs),
          ],
        }),
        new TableCell({
          width: {
            size: 2000,
            type: WidthType.DXA,
          },
          children: [new Paragraph(entry.length.toString())],
        }),
      ],
    })
  );
})
console.log(rows);
const table = new Table({
  columnWidths: [2000, 2000, 2000, 2000],
  rows: rows 
});

const doc = new Document({
  sections: [
    {
      children: [new Paragraph({ text: 'Table with skewed widths' }), table],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('My Document.docx', buffer);
});
