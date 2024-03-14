import { useState } from 'react';
import styled from 'styled-components';
import Upload from '../../Components/Upload';
import Button from '../../Components/Button';


function Videos() {
  const [modal, setModal] = useState(false)

  return (
      <AppStyled>
        <div className="upload">
          <Button 
            name="Upload"
            icon={<i className="fas fa-plus"></i>}
            onClick={() => {setModal(true);}}
            bg="#1e90ff"
          />
        </div>
        {modal && <Upload />}
        <h1>Video Uploader</h1>
        {modal && <div className="overlay" onClick={() => setModal(false)}></div>}
      </AppStyled >
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1{
    color: #fff;
    background: linear-gradient(to right, #00b894 40%,#705DF2 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .upload{
    display: flex;
    justify-content: flex-start;
  }
`;

export default Videos;
