import { useContext, useState } from 'react'
import { useNavigate, Link, UserAuth } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider'


export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password, username);
      navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='container '>
      <div className="row mx-5 px-4 pt-4 pb-5">
        <div className="col ml-2 mt-4 ">
          <div  className="card px-5 mx-5 py-4  sign-Incard">
            <h2 className="pt-4 pb-2 text-center font-weight-bold">Create Account</h2>
            <h4 className="pb-4 text-center font-weight-bold">Get started with your free Account</h4>
            <form onSubmit={handleSubmit}>
              <div className=' py-2'>
                <h4 className='py-2 font-medium'>Email Address</h4>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control  center mb-3"
                  type='email'
                />
              </div>
              <div className=' py-2'>
                <h4 className='py-2 font-medium'>Username</h4>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control mb-3"
                  type='text'
                />
              </div>
              <div className=' py-2'>
                <h4 className='py-2 font-medium'>Password</h4>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control mb-3"
                  type='password'
                />
              </div>
              <button className="btn btn-outline-dark w-50 text-dark mt-5  button-sign mb-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


