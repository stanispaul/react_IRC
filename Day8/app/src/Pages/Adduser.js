import React from 'react';
function AddUsers()
{
    return (
        <>
        <form>
        <input type='text' id='username' placeholder='username'/>
        <input type='password' id='password' placeholder='password'/>
        <button type='submit' className='submit-btn'>SUBMIT</button>
        </form>
        </>
    )
}
export default AddUsers;