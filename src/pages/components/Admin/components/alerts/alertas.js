import Swal from "sweetalert2";

export const alertaError = (desc) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: desc,
  });
};

export const alertaSuccess = (desc) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: desc,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const alertaConfirm = (tittle, desc) => {
  var cerrar = true;
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Okay",
  }).then((result) => {
    if (result.isConfirmed) {
      cerrar = false;
      return cerrar;
    }
  });
};
