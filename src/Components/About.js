// import React, { useState } from 'react'

export default function About({darkMode}) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: '#333333',
    //     // border: '2px solid #333333',
    //     borderRadius: '5px',
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.backgroundColor === '#333333'){
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: '#333333',
    //             border: '2px solid white',
    //             borderRadius: '5px',
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor: '#333333',
    //             color: 'white',
    //             border: '2px solid #333333',
    //             borderRadius: '8px'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

    let myStyle = {
        color: darkMode === 'dark'? 'white':'#333333',
        backgroundColor: darkMode === 'dark'? '#333333':'white',
    }

  return (
    <>
    <div className="container my-3 py-3 rounded-3" style = {myStyle}>
        <div className="accordion" id="accordionExample">
            <h1 className='my-3 mx-3'>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About TextUtils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate class that we use to style each element. These class control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How to use TextUtils
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong> <code>100%</code> user friendly and easy to use. </strong>
                    <p>Write your Text whatever you want to manipulate, click on the below buttons to change your text accordingly. For example use <button className='btn btn-primary mx-2'>Convert to uppercase</button> to change your text to UPPERCASE. Other buttons act likewise. </p>
                    <p>We are not limited to these much features, more updates coming soon. Stay tuned ☺️...</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Thanks for using TextUtils
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>Thank You...</strong> We appreciate you using TextUtils. You can find the source code for this project on <code>...Updating Soon</code>.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="my-3">
            <button onClick = {toggleStyle} className='btn btn-primary my-3' type='button'>{btnText}</button>
        </div> */}
    </div>
    </>
  )
}
