# Upload-to-S3-from-React

An easy to guide to setup an AWS S3 bucket and upload files to it from a React frontend

Steps to follow

1. Create the AWS S3 bucket as mentioned [here](https://medium.com/p/fbd8f0b26f5/)
2. Clone this repository
3. Run `npm install`

   The `react-aws-s3` package, has been used to facilitate the file uploads to th S3 bucket
4. Create a `.env` file at the root of the repository and add the details in the following format

    ```
    REACT_APP_BUCKET_NAME=your-bucket-name
    REACT_APP_REGION=add the location of your bucket (eg: us-west-2)
    REACT_APP_ACCESS=got-from-the-security-credentials
    REACT_APP_SECRET=got-from-the-security-credentials
    ```
5. Run `npm start` to start the server on `PORT 3000` 

On uploading a file, it will get uploaded to the S3 bucket!
