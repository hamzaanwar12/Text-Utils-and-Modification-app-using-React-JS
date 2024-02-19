import { useState } from "react";
import "./TextArea.css"

export default function TextArea(props) {
    const [text, setText] = useState("");
    const [state,setState] = useState({
        color : "black",
        backgroundColor : "white",
        
    });

    const [buttonText,setbuttonText] = useState("Dark Theme")
    const [buttonState,setbuttonState] = useState("btn btn-dark")

    let changeTheme = ()=>
    {
        if(buttonState == "btn btn-dark")
        {
            setbuttonState("btn btn-light")
            setbuttonText("Light Theme");
            setState({
                color : "white",
                backgroundColor : "black",
                border:"2px solid white",
                marginTop:"1.5rem"
            })
        }
        else if(buttonState == "btn btn-light")
        {
            setbuttonState("btn btn-dark")
            setbuttonText("Dark Theme");
            setState({
                color : "black",
                backgroundColor : "white"
            });
        }
    }

    let handleOnChange = (event) => {
        // console.log(event.target.value)
        setText(event.target.value)
    };
    let controlWords = ()=>
    {
        let a = 0;
        if((text.split(" ").length == 1 && text.charAt(0)=="")|| (text.split(" ").length>1 &&  text.charAt(text.length-1)==" "))
        {
            // console.log("=>" + text.charAt(text.length) + "=>")
            a = 1;
        }
        return a;
    }
    let controlLines = ()=> 
    {
        let a=0
        if((text.split("\n").length == 1 && text.charAt(0) == "")||(text.split(" ").length>=1 &&  text.charAt(text.length-1)=="\n"))
            a = 1
        // console.log(a)
        return a
    }
    
    let lowerCase = ()=>{setText(text.toLowerCase ())}
    let upperCase = ()=>{setText(text.toUpperCase())}
    let localCase = ()=>{setText(text.toLocaleLowerCase())}
    let copy = ()=>{navigator.clipboard.writeText(text)}
    let capitalize = ()=>
    {
        
        let array = text.split(" ");
        for(let i =0;i<array.length;++i)
            array[i] = (array[i].charAt(0).toUpperCase() + array[i].substring(1).toLowerCase())
        
        let checkString = ""
        for(let i =0;i<array.length;++i)
            checkString += (array[i] + " ")
        setText(checkString)
        
       /*
       let newText = text
       for(let i =0;i<newText.length;++i)
       {

        if(newText.charAt(i)==" "||newText.charAt(i)=="\n")
            if(i+1<newText.length)
                newText =  newText.substring(0,i) + newText.charAt(i+1).toUpperCase + newText.substring(i+1+1).toLowerCase()
        
       }
       setText(newText)
       */
        
    }
    let clear = ()=>{setText("")}
    
    let onTrim = ()=>
    {
        let re = /\s{2,}/;
        let array = text.split(re);
        let newText = "";
        for(let i  = 0;i<array.length-1;++i)
            newText += (array[i]+" ");
        setText(newText)
    }

    return (
        <div style={state}>
            <h1>Enter Text here to Analyze</h1>
            <textarea class="form-control my-3" style={state} value={text} onChange={handleOnChange} rows={8} placeholder="write here"></textarea>
            <div className="alignment" style={state}>
                <button className="btn btn-primary" onClick={upperCase}>ToUpperCase</button>
                <button className="btn btn-success" onClick={lowerCase}>ToLowerCase</button>
                <button className="btn btn-danger" onClick={localCase}>ToLocalCase</button>
                <button className={buttonState} onClick={copy}>Copy</button>
                <button className="btn btn-info " onClick={capitalize}>Capitalize</button>
                <button className="btn btn-warning " onClick={clear}>Clear</button>
                <button className="btn btn-success" onClick = {onTrim}>Trim </button>
            </div>
            <div className="container my-5">
                <button className={buttonState} onClick = {changeTheme}> {buttonText}</button>
            </div>
            <div className="subContainer my-5" style={state}> 
                <h2>Text Summary:</h2>
                <ul>
                    <li>No of Words : {text.split(" ").length - controlWords() + text.split("\n").length - controlLines()}</li>
                    <li>No of Lines : {text.split("\n").length -  controlLines()}</li>
                    <li>No of Characters : {text.length}</li>
                    <li>Time to Read : {(text.split(" ").length - controlWords() + text.split("\n").length - controlLines())*0.005} minutes(on avg)</li>
                </ul>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}