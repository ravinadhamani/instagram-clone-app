import React from 'react';
import styles from './uploadimage.module.css'
import Button from '@mui/material/Button';
import {useState} from 'react';

const UploadImage = () => {
    const [image, setImage] = useState([]);

    function onImageUpload(e){
        setImage([...e.target.files[0]]);
    }
    return (
      
        <>
            <div className={styles.formPopup}>
                <Button variant="contained" component="label">
                    Upload File
                <input type="file" accept="image/*" hidden onChange={onImageUpload}/>
                {imageURLs.map(imageSrc=> <img src={imageSrc}/> )}
                </Button>
            </div>
        </>
    );
}
export default UploadImage;