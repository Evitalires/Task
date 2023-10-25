import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <section className='Modal absolute inset-0 bg-zinc-900 bg-opacity-70 w-screen h-screen '>
      {children}
    </section>,
    document.getElementById('modal')
  )
}

export { Modal }