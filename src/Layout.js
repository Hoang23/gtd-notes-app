import { Container, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "3rem",
  },
});

export const Layout = ({ children }) => {
  const { container } = useStyles();

  return (
    <Container maxWidth='md' className={container}>
      <Box height='100%'>{children}</Box>
    </Container>
  );
};
