import React from 'react';
function EditUsers()
{
    return (
        <>
         <form>
        <input type='text' id='username' placeholder='username'/>
        <input type='password' id='password' placeholder='password'/>
        <button type='submit' className='submit-btn'>SAVE</button>
        </form>
        </>
    )
}
export default EditUsers;