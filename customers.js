import { client } from "./pgconnect.js"; 

export async function getAllCustomers(req, res){
  try {
    await client.connect()
    
    const data = await client.query('SELECT * FROM customers')
    
    await client.end()
    res.status(200).send(data.rows)

  } catch (err) {
    await client.end()
    res.status(400).send(err)
  }
}