function InputField({id, label, type, value, onChange}) {
    return (
        <label htmlFor={id}>
            {(type === "text" || type === "number") && label}
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            />
            {(type === "checkbox" || type === "radio") && label}
        </label>
    );
}

export default InputField;