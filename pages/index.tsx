import { Box, Container, Typography } from '@material-ui/core'

export default function Home() {
  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h1">Andrii Shupta: DEV</Typography>
          </Box>
        </Container>
      </main>
    </>
  )
}
