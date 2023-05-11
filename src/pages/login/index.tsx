import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await signIn('credentials', {
      email, password,
       redirect: false
    })
  }

  return (
    <form className='login flex gap-4 mt-4' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className='bg-red-800 p-3 rounded-md'>Submit</button>
    </form>
  )
}

export default Login