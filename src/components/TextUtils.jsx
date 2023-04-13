
import { useCallback, useState } from 'react';
import UtilDetails from './UtilDetails';


function TextUtils() {

    const [text, setText] = useState('');
    const [selectedText, setSelectedText] = useState('');
    const [searchText, setSearchText] = useState('');
    const [replaceText, setReplaceText] = useState('');


   const words = useCallback(function(){
    if ( selectedText ) {
      return selectedText.split(' ').length;
    }
    return text ? text.split(' ').length : 0;
  }, [text, selectedText])

  const characters = useCallback(function() {
    if ( selectedText ) {
      return selectedText.length;
    }
    return text.length;
  }, [text, selectedText])

  const sentences = useCallback(function(){
    if ( selectedText ) {
      return selectedText.split('.').length - 1;
    }
    return text ? text.split('.').length - 1 : 0;
  }, [text, selectedText])

  const toUpperCase = useCallback(function () {
    setText(text.toUpperCase())
  }, [text])

  const toLowerCase = useCallback(function() {
        setText(text.toLowerCase())
    },[text])

  const toTitleCase = useCallback(function () {
    const lowercase = text.toLowerCase();
    const format = lowercase.replace(lowercase.charAt(0), lowercase.charAt(0).toUpperCase())
    setText(format)
  }, [text])

    function clear() {
      setSelectedText('');
      setText('');
    }

    function clearSelection() {
      setSelectedText('');
    }

  const reverse = useCallback(function () {
    if (text.length > 1)
      setText(text.split('').reverse().join(''));
  }, [text])


  function selectText() {
    const selection = window.getSelection().toString();
    if ( text.includes(selection)) {
        setSelectedText(selection);
        setSearchText(selection);
    }
  }
    

    return (
        <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="row g-0 my-4 flex-grow-1">
                  <div className="col">
                    <textarea id='app-text' value={text} onChange={(e) => setText(e.target.value)} onSelect={() => {selectText()}} rows="5" className="form-control" type="textarea" placeholder="Please enter the text here" />
                  </div>
                  <div className='flex'>
                    <strong>
                      <pre className='m-0'> {words()} word(s) & {characters()} character(s)</pre>
                    </strong>
                  </div>
                  <div className="col">
                    <div className="row g-0 gap-2 justify-between my-4">

                    <div className="dropdown col">
                      <button disabled={!!!text.length} className="btn btn-primary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cases
                      </button>
                      <ul className="dropdown-menu p-0 border-0">
                        <li><button disabled={!!!text.length} type="button" onClick={() => { toLowerCase() }} className="btn btn-primary w-100">Lowercase</button></li>
                        <li><button disabled={!!!text.length} type="button" onClick={() => { toUpperCase() }} className="btn btn-primary w-100">Uppercase</button></li>
                        <li><button disabled={!!!text.length} type="button" onClick={() => { toTitleCase() }} className="btn btn-primary w-100">Titlecase</button></li>
                      </ul>
                    </div>

                      <button disabled={!!!text.length} type="button" onClick={() => { reverse() }} className="btn btn-primary col">Reverse</button>
                      <button disabled={!!!text.length} type="button" className="btn btn-primary col" data-bs-toggle="modal" data-bs-target="#findreplace">Find & Replace</button>
                      <button disabled={!!!text.length} type="button" onClick={() => { clear() }} className="btn btn-secondary col">Clear</button>
                      {selectedText ? <button disabled={!!!text.length} type="button" onClick={() => { clearSelection() }} className="btn btn-secondary col">Clear Selection</button> : ''}
                    </div>
                  </div>
                </div>
            </div>
            
            {text.length ? 
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className='row g-0 my-4 flex-grow-1'>
                  <div className="col">
                    <UtilDetails words={words()} characters={characters()} sentences={sentences()} selectedText={selectedText}></UtilDetails>
                  </div>
                </div>
              </div>
            
            : ''}
          </div>
          
        </div>


          

{/* Modal */}
<div className="modal fade" id="findreplace" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="Find And Replace" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Find and Replace</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Searched Text:</label>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Replacement Text:</label>
            <textarea value={replaceText} onChange={(e) => setReplaceText(e.target.value)} className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={() => {setText(text.replace(searchText, replaceText)); clearSelection()}} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}


export default TextUtils;