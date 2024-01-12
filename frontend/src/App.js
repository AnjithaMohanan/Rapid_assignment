import React ,{useState} from 'react'
import styled from 'styled-components'
import Videos from './components/Videos';
import { useGlobalContext } from './context/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import Upload from './components/Upload';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
 const [modal, setModel] = useState(false)

  return (
    <BrowserRouter>
      <AppStyled className="App">
      <div className='upload'>
      {/* <button onClick={() =>setModel(true)}>Upload</button> */}
      
      <Button 
      name="Upload"
      icon={<FontAwesomeIcon icon={faPlus} />}
      onClick={() => {setModel(true)}}
      bg="#1e90ff"
      
      />
      </div>
      {modal && <Upload />}
        <h1>Video Uploader</h1>
        <Routes>
          <Route path='/' element={<Videos />} />
          <Route path='/videos/:id' element={<VideoPlayer />} />
        </Routes>
        {modal &&
        <div className='overlay' onClick={()=> setModel(false)}></div>}
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;

  h1 {
    color: #fff;
    background: linear-gradient(to right, #00b894 40%, #705DF2);
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

export default App;
