import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App/App.tsx'
import { UserProvider } from './entities/User/model/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>
)
