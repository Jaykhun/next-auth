import Link from 'next/link'

const Header = () => {
  return (
    <div className='header flex gap-4 text-2xl'>
      <Link href='/'>Home</Link>
      <Link href='/admin'>Admin</Link>
      <Link href='/login'>Login</Link>
    </div>
  )
}

export default Header