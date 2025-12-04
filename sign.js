// let user_name = document.getElementById('name');
// let number = document.getElementById('num');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let signupBtn = document.getElementById('signBtn');
// let googleBtn = document.getElementById('googleBtn')
// let fbBtn = document.getElementById('fbBtn')

// if (signupBtn) {
// signupBtn.addEventListener('click', async ()=>{
//   if (user_name.value == "" || email.value == "" || password.value == "") {
//       alert('Fill all fields before login')
//   }else{
//     const { data, error } = await client.auth.signUp(
//   {
//     email: email.value,
//     password: password.value,
//     options: {
//       emailRedirectTo: 'https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html',

//       data:{
//         displayName : user_name.value,
//         number : number.value
//       } 
//     }
//   })

// if (error) {
//   alert('error' + error.message);
//   console.error('error' + error.message);
// }else{
//   window.location.href = 'https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html'
// }

//   user_name.value = ""
//   email.value == ""
//   password.value == ""

//   }
// })
// }

// if (googleBtn) {
//   googleBtn.addEventListener('click', async()=>{
//     const { data, error } = await client.auth.signInWithOAuth({
//     provider: 'google' ,
//     options: {
//     redirectTo: "https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html"
//   }
// })
// if (error) {
//     console.error(error);
// }
//   })
// }

// if (fbBtn) {
//   fbBtn.addEventListener('click', async()=>{
//     const { data, error } = await client.auth.signInWithOAuth({
//     provider: 'facebook' ,
//     options: {
//     redirectTo: "https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html" 
//     // redirectTo: window.location.origin + 'https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html'
//   }
// })
// if (error) {
//     console.error(error);
//     window.location.href = 'https://mustafa-raza-26.github.io/Login-Signup_by_supabase/signup.html'
// }
//   })
// }

let user_name = document.getElementById('name');
let number = document.getElementById('num');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signupBtn = document.getElementById('signBtn');
let googleBtn = document.getElementById('googleBtn');
let fbBtn = document.getElementById('fbBtn');


// -------------------- SIGN UP --------------------
if (signupBtn) {
  signupBtn.addEventListener('click', async () => {

    if (user_name.value == "" || email.value == "" || password.value == "") {
      alert('Fill all fields before signup');
      return;
    }

    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: "https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html",
        data: {
          displayName: user_name.value,
          number: number.value
        }
      }
    });

    if (error) {
      alert("Signup Error: " + error.message);
      console.error("Signup Error:", error.message);
    } else {
      window.location.href = "https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html";
    }

    // Reset fields
    user_name.value = "";
    email.value = "";
    password.value = "";

  });
}


// -------------------- GOOGLE LOGIN --------------------
if (googleBtn) {
  googleBtn.addEventListener('click', async () => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html"
      }
    });

    if (error) {
      console.error("Google Error:", error.message);
      alert("Google Login Error: " + error.message);
    }
  });
}


// -------------------- FACEBOOK LOGIN --------------------
if (fbBtn) {
  fbBtn.addEventListener('click', async () => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html"
      }
    });

    if (error) {
      console.error("Facebook Error:", error.message);
      alert("Facebook Login Error: " + error.message);
      return;
    }
  });
}
