import Swal from 'sweetalert2'

export function useFlash() {
  function errorFlash(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }

  return { errorFlash }
}
