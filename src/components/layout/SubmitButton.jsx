import React from 'react';


const SubmitButton = (props) => {
    // const { isFormSubmit } = UserStore()





    if (! props.loading) {
        return <button  onClick={props.onClick} type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{props.text}</button>
        // return <button  onClick={props.onClick} type='submit' className={props.className}>{props.text}</button>
    } else {
        return <button disabled={true}  type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" role='status'><div className='spinner-border spinner-border-sm'></div> Prosessing...</button>

    }



};

export default SubmitButton;








