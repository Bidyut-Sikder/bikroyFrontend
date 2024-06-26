


import Swal from 'sweetalert2'


 
export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}








export function unauthorized(code) {
    if (code === 401) {
        sessionStorage.clear()
        localStorage.clear()
        window.location.href = '/login'
    }
}

export function getToken() {
   return sessionStorage.getItem('token')
}


export function setEmail(email) {
    sessionStorage.setItem('email', email)
}

export function getEmail() {
    return sessionStorage.getItem('email')
}


export function TimestampToDate(timestamp) {
    let date = new Date(timestamp)
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nav', 'Dec']
    return date.getDate() + " " + " " + monthName[date.getMonth()] + " " + date.getFullYear()
}


export async function DeleteAlert() {
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        allowOutsideClick: false

    })
    return result.isConfirmed;
}




export async function SuccessAlert(msg) {
    const result = await Swal.fire({
        text: msg,
        icon: 'success',
        confirmButtonColor: '#198754',
        confirmButtonText: 'OK',
        allowOutsideClick: false


    })
    return result.isConfirmed;
}





export async function FailAlert(msg) {
    const result = await Swal.fire({
        text: msg,
        icon: 'warning',
        confirmButtonColor: '#fcac3f',
        confirmButtonText: 'Try Again',
        allowOutsideClick: false


    })
    return result.isConfirmed;
}





export async function InfoAlert(msg) {
    const result = await Swal.fire({
        text: msg,
        icon: 'info',
        confirmButtonColor: '#198754',
        confirmButtonText: 'Go Ahead',
        allowOutsideClick: false


    })
    return result.isConfirmed;
}






























