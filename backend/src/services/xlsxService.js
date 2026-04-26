import XLXSX from 'xlsx';

function readXlsx(filePath) {

    const workbook = XLXSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLXSX.utils.sheet_to_json(sheet);

    return data;
}

export default {
    readXlsx
};