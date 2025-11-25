const supabaseURL = 'https://qqgjdalywbvibvvgwvkf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZ2pkYWx5d2J2aWJ2dmd3dmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MDAyNzIsImV4cCI6MjA3ODk3NjI3Mn0.UYT8Zv6xcunFHpbE527RTI2YBpcDwJPT2I0-fu4kk70';
const client = supabase.createClient(supabaseURL,supabaseKey)

let emailValue = document.getElementById('email');
let passwordValue = document.getElementById('password');
let loginBtn = document.getElementById('logBtn');

if (loginBtn) {
loginBtn.addEventListener('click', async ()=>{
    if (emailValue.value == "" || passwordValue.value == "") {
        alert('Fill all fields before login')
    }else{
    const { data, error } = await client.auth.signInWithPassword({
    email: emailValue.value,
    password: passwordValue.value,
    })

    if (error) {
        console.error('error'+ error.message);
    }else{
        window.location.href = `https://mustafa-raza-26.github.io/Login-Signup_by_supabase/dashboard.html`
    }
    }
})
}