export const formValidation = (form, setErrorModal, setSuccessModal,submitForm) =>{
    const emailTest = /\S+@\S+\.\S+/.test(form.email)
    
    if(form.name === '' || form.email === '' || form.message === '' ){
        setErrorModal({status: true, message: 'Please fill out all fields of the form and try again.'})
    
    }    
    else if(!emailTest){
        setErrorModal({status: true, message: 'Please enter a valid email address and try again.'})
    }
    else{
        setSuccessModal(true)
        submitForm()
    }
}