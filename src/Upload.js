import React , {useState} from 'react';
import S3 from 'react-aws-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    }

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        let fname = process.env.REACT_APP_LOCATION + file.name
        const ReactS3Client = new S3(config);
        console.log(fname)
        ReactS3Client
        .uploadFile(file, file.name)
        .then(data => console.log(data.location))
        .catch(err => console.error(err))
    }
    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default Upload;