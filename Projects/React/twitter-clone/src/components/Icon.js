import './App.css';

function Icon() {
    return (
        <div className="icon" style={{background: "darkGreen"}}>
            {props.realname.charAt(0)}
        </div>
    );
  }

export default Icon;