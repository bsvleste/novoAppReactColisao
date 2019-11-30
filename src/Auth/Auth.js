//export const isAuthenticated =()=> false;
/*criar a logica de autenticação aqui*/ 

export  const isAuthenticated =()=>{
    const token =  localStorage.getItem('token');
    return token !== null ? true : false;
};

export const isAdm=()=>{
    const isAdm =localStorage.getItem('isAdm');
    return isAdm !== null ? true : false 
}