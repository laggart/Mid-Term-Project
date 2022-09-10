const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';


const body = { item: datos };
const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key":'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify(body)
};