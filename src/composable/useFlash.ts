import Swal from 'sweetalert2'

export function useFlash() {
  function errorFlash(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }

  function successFlash(message: string, timer: number = 1500): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer
    })
  }

  return { errorFlash, successFlash }
}
