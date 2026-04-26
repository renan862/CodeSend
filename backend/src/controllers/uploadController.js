import multer from 'multer';
import xlxsService from '../services/xlsxService.js';

const uploadMiddleware = multer({ dest: 'uploads/' }).single('file');

function upload(req, res){
    uploadMiddleware(req, res, function(err){
        if(err){
            return res.status(500).json({ error: 'Error uploading file' });
        }
        const data = xlxsService.readXlsx(req.file.path);
        res.json({ data });
    })
}

export { upload };