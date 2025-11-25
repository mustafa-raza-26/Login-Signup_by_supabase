let user_name = document.getElementById('name');
// let number = document.getElementById('num');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signupBtn = document.getElementById('signBtn');

if (signupBtn) {
signupBtn.addEventListener('click', async ()=>{
  if (user_name.value == "" || email.value == "" || password.value == "") {
      alert('Fill all fields before login')
  }else{
    const { data, error } = await client.auth.signUp(
  {
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: 'http://127.0.0.1:5500/index.html',

      data:{
        displayName : user_name.value,
        // number : number.value
      } 
    }
  })

if (error) {
  alert('error' + error.message);
  console.error('error' + error.message);
}else{
  window.location.href = 'https://mustafa-raza-26.github.io/Login-Signup_by_supabase/index.html'
}

  user_name.value = ""
  email.value == ""
  password.value == ""

  }
})
}
