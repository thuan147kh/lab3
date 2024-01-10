import * as React from "react";

// class MyButton extends React.Component{
//     render(){
//         const {disabled, text} = this.props;
//         return <button disabled={disabled}>{text}</button>
//     }
// }

const MyButton = ({disabled, text}) => (
    <button disabled={disabled}>{text}</button>
)

MyButton.defaultProps = {
    text: "My Button",
    disabled: false,
}

export default MyButton;