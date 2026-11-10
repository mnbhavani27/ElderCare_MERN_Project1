import {Navigate} from 'react-router-dom';
export default function ProtectedRoute({children,role}){const user=JSON.parse(localStorage.getItem('eldercare_user')||'null');if(!user)return <Navigate to="/login" replace/>;if(role&&user.role!==role)return <Navigate to={user.role==='admin'?'/admin':'/dashboard'} replace/>;return children;}
