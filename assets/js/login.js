const apiLogin = async (email, password) =>
{
    try
    {
        const response = await fetch('http://localhost:3000/api/login',
        {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password })
        })

        const {token} = await response.json();

        localStorage.setItem('jwt-token', token);

        return token;
    }
    catch (error)
    {
        localStorage.clear();
        console.error(`Error: ${error}`);
    }
}

export { apiLogin };
