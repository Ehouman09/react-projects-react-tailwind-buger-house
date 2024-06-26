import React from 'react'

export default function HeadingTitle(props) {

    const {
        children,
        variant
    } = props;


    const defaultClass = "px-7 py-3 bg-primary text-secondary uppercase font-bold inline-block";

    switch (variant) {
        case "h3":
            
        return (
            <div className='flex items-center justify-center my-5'>
               <h3 className={ ` text-sm ${defaultClass}` }>  {children} </h3>
            </div>
          );
    
        default:
            return (
                <div className='flex items-center justify-center my-5'>
                   <h2 className={ `${defaultClass}` }>  {children} </h2>
                </div>
            );
    }
  
}
