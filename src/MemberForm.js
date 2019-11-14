import React, { useState } from "react";

const MemberForm = props => {
    const [field, setField] = useState({ name: "", email: "", role: "", id: "" });

    const handleChanges = e => {
        setField({...field, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(field);
        setField({ name: "", email: "", role: "", id: ""});
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Add New Member: </label>
            <input
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={field.name}
            placeholder="Add Name Here"
            />
            <input
            id="email"
            type="email"
            name="email"
            onChange={handleChanges}
            value={field.email}
            placeholder="Add Email Here"
            />
            <input
            id="role"
            type="text"
            name="role"
            onChange={handleChanges}
            value={field.role}
            placeholder="Add Role Here"
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default MemberForm;