import React from 'react'

function Input({type, name,className, placeholder, required=true}) {
  return (
      <div>
          <input
                type={type}
                className={className}
                name={name}
                placeholder={placeholder}
                required={required}
              />
    </div>
  )
}

export default Input