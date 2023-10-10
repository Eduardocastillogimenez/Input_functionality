import { useState } from 'react';
import InputV from "./input";
import Auto from "./auto";
import { Input } from 'antd';

function InputFunctionality() {
    // const { TextArea } = Input;
    const [text, setText] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
        setText(e.target.value);
      };

// border: "1px solid black", 
  return (
    <div>
        <div style={{position: "relative", height: "40px"}}>
            <Input onChange={onChange} bordered={false} style={{position: "absolute", zIndex: 1000, width: "100%", height: "100%", padding: 0, margin: 0, color: "transparent"}} />
            <div style={{position: "absolute", zIndex: 1, width: "100%", height: "100%", padding: 0, margin: 0}}>
                <Auto text={text}/>
            </div>
            
        </div>
        <Auto text={undefined}/>
    </div>
  );
}

export default InputFunctionality;