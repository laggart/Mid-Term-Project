console.log('JS Connected')

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const fullName = document.querySelector('#username').value
    if (!fullName.length) alert('please insert your name')
    
    const email = document.querySelector('#usermail').value
    if (!email.length) alert('please insert a valid email')
    console.log(email)

    const phone = document.querySelector('#userphone').value
    if (phone.length < 12 && phone.charAt(0) !== '+') alert('please insert a valid phone number +34...')

    const message = document.querySelector('#usermessage').value
    if (message.length < 50) alert('minimum length 50 characters')

    const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

    const data = {
        user: fullName,
        email: email,
        phone: phone,
        message: message,
    };

    console.log(data)

    const fetchParams = {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "X-API-Key":'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
        },
        body: JSON.stringify({ item: data })
    };
    
    fetch(url, fetchParams)
        .then(response => {
            if (response.ok) return response.json(); 
        })

        .then(json => {
            console.log(json);
        })

        .catch(error => {
            console.log(error)
        });
})