function TextField({id, className, label, value, onChange}) {
    return (
        <label htmlFor={id}>{label}
            <textarea
                className={className}
                name={id}
                id={id}
                value={value}
                onChange={onChange}
            >
            </textarea>
        </label>
    );
}

export default TextField;