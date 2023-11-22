import React from 'react';
import { users } from '../components/db';
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
    const [readSearchParams, setReadSearchParams] = useSearchParams();
    console.log('readSearchParams', readSearchParams);
    // Home component 충돌 시키기
    const user: any = [];
    return (
        <div>
            <h1>Users</h1>
            {/* <h3>{user[0].name}</h3> */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
