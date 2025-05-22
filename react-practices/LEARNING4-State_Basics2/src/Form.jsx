import './App.css'
import { useState } from 'react'

function Form() {

 /*
  * 4) Form 
  */
//   const [username, setUsername] = useState('')
//   const [isSubscribed, setSubscribed]
//    = useState(false)
//   const [role, setRole] = useState('user')
//   const roles = ['user', 'admin', 'guest']

//   return (
//     <form>
// 	    <p>
//         Name: {username}
//         {isSubscribed && ' (Subscribed)'}
//       </p>
//       <p>Role: {role}</p>
//       <input
//         type="text" placeholder="Username"
//         value={username}
//         onChange={
//           (e) => setUsername(e.target.value)
//         }/>
//       <input
//         type="checkbox"
//         checked={isSubscribed}
//         onChange={
//           (e) => setSubscribed(e.target.checked)
//           }/>
//       <label>Subscribe</label>

//       <select value={role} onChange={
//         (e) => setRole(e.target.value)}>
//         {roles.map((r) => (
//           <option key={r} value={r}>
//             {r}
//           </option>
//         ))}
//       </select>
//     </form>
//   )



 /*
  * 5) Form 
  */
const [formData, setFormData] = useState({
    username: '',
    isSubscribed: false,
    role: 'user'
  })
  const roles = ['user', 'admin', 'guest']

  const handleChange = (e) => {
    const { name, value, type, checked }
     = e.target
    setFormData({
      ...formData,
      [name]:  type === 'checkbox' ? checked : value
    })
  }

  return (
    <form>
      <p>
        Name: {formData.username}
        {formData.isSubscribed && ' (Subscribed)'}
      </p>
      <p>Role: {formData.role}</p>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="isSubscribed"
          checked={formData.isSubscribed}
          onChange={handleChange}
        />
        Subscribe
      </label>

      <select 
        name="role" value={formData.role}
        onChange={handleChange}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </form>
  )
}

export default Form