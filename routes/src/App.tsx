import AuthProvider from './context/auth-context';
import Routes from './routes';
function App(){
  return(
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    
  )
}
export default App;