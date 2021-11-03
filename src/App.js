import './styles/style.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Dashboard from './components/dashboard.js';
//import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './aws-exports';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

//Amplify.configure(awsconfig);

//https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/#option-1-use-pre-built-ui-components
//<AmplifySignOut />
function App() {
  return (
    <div className="App h-100">      
      <Header/>
      <main className="d-flex flex-column justify-content-between">
        <Dashboard/>
        <Footer/>
      </main>
    </div>
  );
}

//export default withAuthenticator(App);
export default App;
