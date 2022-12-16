import { Button, Paper, Space, TextInput } from "@mantine/core";
import { useState } from "react";

const Register = () => {
  const [nama, setNama] = useState<String>();
  return (
    <>
      <Paper shadow={"lg"} w={400} h={100 + "vh"} p={10}>
        <TextInput 
        label="Nama" 
        placeholder="Nama Anda" 
        onChange={(e) => {
            setNama(e.target.value)
        }} />
        {nama}
        <Space h={"md"} />

        <Button
        onClick={() =>{
            // const body = {
            //     nama:nama
            // }
            console.log(nama)
        }}
        >Simpan</Button>
      </Paper>
    </>
  );
};

export default Register;
