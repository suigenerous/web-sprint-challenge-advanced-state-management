import React, {useState} from 'react';

export default function SmurfForm(props){

    const initialFormValues = {
        name: '',
        age: 0,
        height: '0cm',
    }

    const [formValues, setFormValues] = useState(initialFormValues)


    const handleSubmit = (e) =>{
        e.preventDefault()
        const tempSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height
        }
        props.onSubmit(tempSmurf)
    }


    return(
        <div>
            <h3>Smurf Form Inputs</h3>
            <form onSubmit = {handleSubmit}>
                <label>
                    Name:
                    <input
                        type = 'text'
                        value = {formValues.name}
                        onChange = {e => setFormValues({...formValues, name: e.target.value})}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}