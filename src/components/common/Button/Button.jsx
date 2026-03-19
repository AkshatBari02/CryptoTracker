import PropTypes from "prop-types";
import './button.css';

const Button = ({text, onClick, outlined}) => {
  return (
    <div className={outlined ? "outlined-btn" : "btn"} onClick={onClick}>{text}</div>
  )
}

Button.propTypes = {
  text: PropTypes.string ,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
};

export default Button