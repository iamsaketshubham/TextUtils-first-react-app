import React from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white' 
       
    }
  return (
    
    
    <div className = "container" style = { {color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className = "my-3">About us</h1>
      <div className="accordion" id="accordionExample" style = {myStyle }>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}> 
          Textutils gives you a way to analyze your text quickly and efficiently.Be it word count,character count and many more.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
        Textutils is a free character  counter tool that provide instant character count and word count statistics for a given text.Textutils report the number of words and character.Thus ut is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
       Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
      This word counter software works in any web browser such as Chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count characters in facebook,blog,books,excel,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
