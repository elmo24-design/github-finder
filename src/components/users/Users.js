import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';

const Users = () => {
   const githubContext = useContext(GithubContext)

   const {loading,users} = githubContext

   if(loading){
      return <Spinner />
   }else{
      return (
         <div style={userSyle}>
            {
               users.map(user => (
                  <UserItem key={user.id} user={user}/>
               ))
            }
         </div>
      )
   }
}

// Users.propTypes = {
//    users: PropTypes.array.isRequired,
//    loading: PropTypes.bool.isRequired
// }

const userSyle = {
   display: 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)',
   gridGap: '1rem'
}

export default Users
