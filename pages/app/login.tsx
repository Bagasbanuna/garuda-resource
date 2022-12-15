import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 100 + "vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://static.vecteezy.com/system/resources/previews/001/072/376/original/network-connections-on-white-background-vector.jpg)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 100 + "vh",
    maxWidth: 450,
    flex: 'flex-end',
    


    //   paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    backgroundImage:
      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Garuda_Pancasila%2C_Coat_of_Arms_of_Indonesia.svg/944px-Garuda_Pancasila%2C_Coat_of_Arms_of_Indonesia.svg.png)",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Login() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>

      <Paper className={classes.form} radius={0} p={30}   >

        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome to GRP!
        </Title>

        <TextInput
          label="Email address"
          placeholder="email@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Simpan Password" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" radius={100}>
          Login
        </Button>

        <Text align="center" mt="md">
          {/* Don&apos;t have an account?{' '} */}
          Belum punya akun ?{" "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Daftar
          </Anchor>
        </Text>
      </Paper>
        
    
    </div>
  );
}
