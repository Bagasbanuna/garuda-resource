import { Box, Button, createStyles, Flex, Input, Paper, TextInput } from "@mantine/core";

const useStyles = createStyles((theme) =>({
    wrapper: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        maxWidth: 500,
        width: '100%',
        height: 200,
        display: ''
    }
}))

export default function LoginPage() {
  return (
    <>
      <div>
        HI
      {/* <Flex
      mih={50}
    //   bg="rgba(0, 0, 0, .3)"
      gap="sm"
      justify="flex-end"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Box
      bg='gray'
      mih={100 + 'vh'}
      w={400}
      >
        
       <Flex
    //   mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
       >
        <Box
        color="black"

        >
            <TextInput placeholder="Email@gmail"></TextInput>
            <TextInput placeholder="Your Password"></TextInput>
        </Box>
       </Flex>
        
        
      </Box>
    </Flex> */}
      </div>
    </>
  );
}
