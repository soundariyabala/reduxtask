import React from 'react'
import UserContextComponents from './components/UserContextComponents'
import Cards from './components/Cards'

export const UserContext = React.createContext()
function App() {

return (
    <div className="container">
       
             <UserContextComponents>
                 <Cards/>
              </UserContextComponents>
  
    </div>
)

}
export default App