// probably stick this in an env file so VITE can pick it up, but just putting this here for now
const baseURL = 'https://modulith.herokuapp.com';

// TODO: If I had more time, I'd put in something like neverthrow to standardize what gets returned/ catch errors, etc
async function login(username: string, password: string) {
    try {

        return await fetch(`${baseURL}/auth/login`, {
            method:'POST',
            cache: 'no-cache',
            headers:{
                'Content-Type':'application/json',
                'Accept': '*/*'
            },
            body:JSON.stringify({
                username: username,
                password: password
            })
        }).then((r) => r.json());
    }
    catch(e) {
        
        return null;
    }
}


export { login };