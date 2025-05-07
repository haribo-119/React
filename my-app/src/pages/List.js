import React from 'react';

const User = ({userData}) => {
    return(
        <tr>
            <td>{userData.email}</td>
            <td>{userData.name}</td>
        </tr>

    );
};

const UserList = () => {
    const users = [
        {email:'winter@gmail.com',name:'겨울'},
        {email:'spring@gmail.com',name:'봄'},
        {email:'summer@gmail.com',name:'여름'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이메일</th>
                    <th>이름</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    );

};

export default UserList;