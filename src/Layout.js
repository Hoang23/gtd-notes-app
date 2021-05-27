import { Container, Box, makeStyles } from "@material-ui/core";
import { Typography } from "./components/Typography";

const useStyles = makeStyles({
  container: {
    marginTop: "3rem",
    minHeight: "90vh",
  },
});

export const Layout = ({ children }) => {
  const { container, footer } = useStyles();

  return (
    <div>
      <Container maxWidth='md' className={container}>
        <Box height='100%'>{children}</Box>
      </Container>
      <Typography className={footer} align='center'>
        @github/hoang23
      </Typography>
    </div>
  );
};
