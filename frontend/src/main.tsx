import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App/App.tsx'
import  UserProvider  from './entities/User/model/UserProvider.tsx'
import PageViewTracker from './App/Providers/PageViewTracker/PageViewTracker.tsx'

createRoot(document.getElementById('root')!).render(
    <HashRouter>
      <UserProvider>
        <PageViewTracker />
        <App />
      </UserProvider>
    </HashRouter>
)
