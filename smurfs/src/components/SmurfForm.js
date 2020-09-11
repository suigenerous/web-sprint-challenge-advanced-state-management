import React, {useState} from 'react';

export default function SmurfForm(props){

    const initialFormValues = {
        name: 'asas',
        age: 2,
        height: '5cm'
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
                <label>
                    Age:
                    <input
                        type = 'text'
                        value = {formValues.age}
                        onChange = {e => setFormValues({...formValues, age: e.target.value})}
                    />
                </label>
                <label>
                    Height:
                    <input
                        type = 'text'
                        value = {formValues.height}
                        onChange = {e => setFormValues({...formValues, height: e.target.value})}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}