import React, {useState} from 'react'
// import { Alert } from 'flowbite-react'

const Success = () => {
    const [show, setShow] = useState(true)

    const handleClose = () => {
        setShow(!show)
    }
    
  return (
    <>
    {show ? (
     <div id="alert-border-4" class="flex p-4 mb-2 items-center gap-2 bg-yellow-300 border-t-4 border-yellow-500 dark:bg-yellow-200" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium text-white">
      Message sent successfully
    </div>
    <button className='nav-btn' onClick={handleClose}>OK</button>
</div>
    ) : null}
    </>
  )
}

export default Success


