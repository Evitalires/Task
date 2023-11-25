import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <section className='absolute inset-0 w-screen h-screen'>
      {children}
    </section>,
    document.getElementById('modal')
  )
}


export { Modal }