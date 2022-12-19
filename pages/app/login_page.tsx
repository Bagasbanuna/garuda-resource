import { useDebouncedState } from "@mantine/hooks";
import { TextInput, Text, Paper, Stack, Input, Button } from "@mantine/core";
import { useState } from "react";
import MyButton from "../../component/button";
import { title } from "process";
import Link from "next/link";

function PageLogin() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <>
      <Paper shadow={"md"} p={"md"} h={100 + "vh"} w={400}>
        <Stack>
          <TextInput
            label={"Email"}
            value={email}
            type={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* {email} */}

          <TextInput
            label={"Password"}
            value={password}
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* {password} */}
          <Button
            onClick={(e: any) => {
              const body = {
                email: email,
                password: password,
              };

              fetch("/api/api-login", {
                method: "POST",
                body: JSON.stringify(body),
              }).then((res) => {
                res.json().then((value) => console.log(value));
                // try {

                // } catch (error) {
                //     res.text()
                // }
              });
            }}
          >
            Klik
          </Button>
          <Link href={"./regist"}>
          <Button>Register</Button>
          </Link>
         
        </Stack>
      </Paper>
    </>
  );
}

export default PageLogin;
