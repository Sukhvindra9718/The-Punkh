import React from 'react'
import styled from 'styled-components'
import Button from './Button';

function Upload({ setIsUpload, setUploadFormOpen, Uploadtitle, UploadType }) {
    const [video, setVideo] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [label, setLabel] = React.useState('Upload your media...');
    const [loading, setLoading] = React.useState(false);


    const handleVideo = (e) => {
        setVideo(e.target.files[0])
        setLabel('Your Video: ' + e.target.files[0].name)
    }
    const handleImage = async (e) => {
        setImage(e.target.files[0])
        setLabel('Your Image: ' + e.target.files[0].name)
    };
    const handleCancel = () => {
        setUploadFormOpen(false)
    }
    const handleUploadVideo = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("video", video)
        if (title) {
            const formData = new FormData();
            formData.append('title', title)
            formData.append('description', description)
            formData.append('video', video);

            await fetch('/api/video/upload', {
                mode: 'no-cors',
                method: 'POST',
                body: formData
            }).then(res => {
                console.log("res", res)
            }).catch(err => console.log(err))


        } else {
            alert('Add Title')
        }

        setLoading(false)
        setTitle('')
        setDescription('')
        setVideo(null)
        setLabel('Upload your video...')
        setUploadFormOpen(false)
        setIsUpload((prev) => !prev)
    }
    const handleUploadImage = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("image", image)
        if (title) {
            const formData = new FormData();
            formData.append('title', title)
            formData.append('description', description)
            formData.append('image', image);

            await fetch('/api/image/upload', {
                mode: 'no-cors',
                method: 'POST',
                body: formData
            }).then(res => {
                console.log("res", res)
            }).catch(err => console.log(err))


        } else {
            alert('Add Title')
        }

        setLoading(false)
        setTitle('')
        setDescription('')
        setImage(null)
        setLabel('Upload your image...')
        setUploadFormOpen(false)
        setIsUpload((prev) => !prev)
    }
    return (
        <UploadStyled>
            <h2>{`Upload ${Uploadtitle}`}</h2>
            <form>
                <div className="input-control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-control">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        placeholder='Enter description here...'
                        id="description" cols="30" rows="6"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="input-control upload-con">
                    <label htmlFor="video">{`${Uploadtitle} Upload`}</label>
                    {UploadType === "Video" ? (<div className="inner-input">
                        <label
                            className='inner-label'
                            htmlFor="video"
                            style={{ color: video ? '#00b894' : 'rgb(74 74 74)' }}
                        >
                            {label}
                        </label>
                        <input
                            type="file"
                            name="video"
                            id="video"
                            accept="video/*"
                            //hidden
                            hidden
                            onChange={handleVideo}
                        />
                    </div>) : (
                        <div className="inner-input">
                            <label
                                className='inner-label'
                                htmlFor="image"
                                style={{ color: video ? '#00b894' : 'rgb(74 74 74)' }}
                            >
                                {label}
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept="image/*"
                                //hidden
                                hidden
                                onChange={handleImage}
                            />
                        </div>)}
                    <div className="upload-btn">
                        {UploadType === "Video" ? (<Button
                            name="Upload"
                            bg={"#00b894"}
                            type="button"
                            disabled={loading}
                            onClick={handleUploadVideo}
                        />) : (
                            <Button
                                name="Upload"
                                bg={"#00b894"}
                                type="button"
                                disabled={loading}
                                onClick={handleUploadImage}
                            />)}
                        <Button
                            name="Cancel"
                            bg={"#00b894"}
                            type="button"
                            disabled={loading}
                            onClick={handleCancel}
                        />
                    </div>
                </div>
            </form>
        </UploadStyled>
    )
}

const UploadStyled = styled.div`
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 40%;
    background: #262626;  
    padding: 2rem; 
    border-radius: 15px;
    box-shadow: 3px 5px 30px rgba(255,255,255,0.1);
    h2{
        color: #fff;
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .input-control{
            display: flex;
            flex-direction: column;
            input, textarea{
                padding: .8rem 1rem;
                border:1px solid rgb(74 74 74);
                border-radius: 5px;
                outline: none;
                resize: none;
                background: transparent;
                color: #fff;
            }
            label{
                font-size: 1.2rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
                color: #fff;
                opacity: 0.9;
            }
        }
        .inner-input{
            display: flex;
            align-items: center;
            justify-content: center;
            border:2px dashed rgb(74 74 74);
            border-radius: 5px;
            padding: 1rem;
            cursor: pointer;
            height: 90px;
            position: relative;
            padding: 1rem;
            .inner-label{
                cursor: pointer;
                margin: 0;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(74 74 74);
            }
        }

        .upload-btn{
            display: flex;
            justify-content: flex-end;
            margin-top: 2rem;
            gap:1rem;
        }
    }
`;

export default Upload