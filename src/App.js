import { Notes } from "./modules/notes";
import { Layout } from "./Layout";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Notes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
