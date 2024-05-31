import styled from "./InputPadrao.module.css";

const InputPersonalizado = ({ titulo,	type,	id,	size,	maxlength,	placeholder, required, readOnly }) => {
	return (
		<div className={styled.dados}>
			<label htmlFor={id}>{titulo}</label>
			<input
				type={type}
				id={id}
				size={size}
				maxLength={maxlength}
				placeholder={placeholder}
				required={required}
				readOnly={readOnly}
			/>
		</div>
	);
};

export default InputPersonalizado;
