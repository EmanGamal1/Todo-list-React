const TextArea = ({type, name, value, id, handleChange, className}) => {
    return(
        <textarea type={type} name={name} value={value} id={id} onChange={handleChange} className={className}/>
    )
}

export default TextArea;