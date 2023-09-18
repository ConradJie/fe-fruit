function Button({type, id, label, disabled=false, onClickHandle=null}) {
    return (
        <button
            type={type}
            id={id}
            disabled={disabled}
            onClick={onClickHandle}
        >{label}
        </button>
    );
}

export default Button;