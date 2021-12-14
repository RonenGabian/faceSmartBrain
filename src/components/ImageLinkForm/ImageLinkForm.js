import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) =>{
    return(
        <div>
            <p className='f3'>
                {'This magic Brain will will detect faces in your picture. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button onClick={onButtonSubmit} style={{textAlign: 'center'}} className='tc w-40 grow f4 link ph3 dib white bg-light-purple' >Detect</button>
                </div>
            </div>
        </div>
    );
}    

export default ImageLinkForm;