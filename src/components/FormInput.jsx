import React from 'react';
export const FormInput = ({regitser, errors, label, id, className, placeholder, ...inputProps}) => {
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input
            ref={regitser}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={''}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            id={id}
            {...inputProps}
            />
            {errors&& <div>{errors.message}</div>}
          </>
    
    )
}  