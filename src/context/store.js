import React, { useState } from 'react';

export const CreateStore = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "hadas", email: "h@gmail.com", password: "h1234",role:"manager" },
        { id: 2, name: "yeudit", email: "y@gmail.com", password: "y1234",role:"user" },
        { id: 3, name: "avia", email: "a@gmail.com", password: "a1234",role:"user" }
    ]);
    const [currentUser, setCurrentUser] = useState(null);

    const store = {
        users,
        currentUser,
        login: (email, password) => {
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                alert("אחד הפרטים שהוזנו שגוי");
            } else {
                setCurrentUser(user);
                alert(user.name + " התחבר בהצלחה");
            }
        },
        register: (newUser) => {
            if (users.some(u => u.email === newUser.email)) {
                alert("האימיל קיים במערכת");
            } else {
                newUser.id = users[users.length - 1].id + 1;
                setUsers([...users, newUser]);
                alert("משתמש נרשם והתחבר בהצלחה");
            }
        },
        logOut:()=>{
            setCurrentUser(null);
        }

    };

    return store; // החזרת הסטור כדי שתוכל להשתמש בו בהקשר של Myprovider
};
