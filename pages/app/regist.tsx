import { Button, Paper, Space, TextInput } from "@mantine/core";
import { useState } from "react";

const Register = () => {
  const [nama, setNama] = useState<String>();
  const [email, setEmail] = useState<String>()
  const [password, setPassword] = useState<String>()


  return (
    <>
      <Paper shadow={"lg"} w={400} h={100 + "vh"} p={10}>
        <TextInput 
        label="Nama" 
        placeholder="Nama Anda" 
        onChange={(e) => {
            setNama(e.target.value)
        }} />

        <TextInput
        label="Email"
        placeholder="Email@gmail.com"
        onChange={(e) =>{
          setEmail(e.target.value)
        }}
        />

        <TextInput
        label="Password"
        placeholder="Your Password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        />

        <Button
        onClick={() =>{
            const body = {
                nama:nama,
                email:email,
                password:password,
            }
            fetch('/api/api-regist' , {
              method: "POST", body: JSON.stringify(body)
            }).then((res) =>{
              res.json().then((value) => console.log(value, 'yey masuk'))
            })
        }}
        >Simpan</Button>
      </Paper>
    </>
  );
};

export default Register;
