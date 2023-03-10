import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider 
        domain="dev-jndmxs47tvnoothy.us.auth0.com" 
        clientId="dvYrElAwN8iOHpr6GkTZxjqMu2dW40gk" 
        authorizationParams={{
          redirect_uri: window.location.origin
        }}           
      >
          <App/>
      </Auth0Provider>      
    </BrowserRouter>

  </React.StrictMode>,
)
