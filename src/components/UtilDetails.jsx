import {  useEffect } from 'react';
import '../css/Details.css'

function UtilDetails(props) {
    const once = 0;
    useEffect(() => {
        // Initialize tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          // eslint-disable-next-line no-undef
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
      },[once]);

    function readingTime(perMinuteWordCount) {
      const seconds =  Math.ceil(props.words * (60 / perMinuteWordCount));
      const minutes = parseInt(seconds / 60);
      const remainingSeconds = seconds % 60;
      return seconds > 60 ? `${minutes} min ${remainingSeconds} sec` : `${seconds} sec`
    }
    const data = [
        {
            name: 'Words',
            value: props.words
        },
        {
            name: 'Characters',
            value: props.characters
        },
        {
            name: 'Sentences',
            value: props.sentences
        },
        {
            name: 'Silent Reading Time',
            value: readingTime(230),
            info: 'Based on an average reading spead of 230 words per minute'
        },
        {
            name: 'Speaking Time',
            value: readingTime(180),
            info: 'Based on an average speaking spead of 180 words per minute'
        }
    ]
    return (
        <>

            <ul className="list-group">
            <li className="list-group-item bg-details">Details</li>
                {data.map(d => <li key={d.name} className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <span className='align-items-center d-flex gap-1'>
                            {d.name}
                            {d.info ? <svg data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-title={d.info} data-bs-custom-class="custom-tooltip" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg> : ''}
                        </span>
                        <span className="badge bg-secondary">{d.value}</span>
                    </div>
                </li>)}

                <li className="list-group-item">
                    <div className="d-flex justify-content-between row-cols-2">
                        <span className='align-items-center d-flex gap-1'>Selected Text</span>
                        <div className={'scrollable' + (props.selectedText ? '' : ' text-end')}>
                            {props.selectedText ? props.selectedText : '--'}
                        </div>
                    </div>
                </li>

            </ul>
        </>
    )
}


export default UtilDetails;