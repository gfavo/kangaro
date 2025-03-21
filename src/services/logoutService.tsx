'use client';

import Router from 'next/router';

export const handleLogout = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/session/logout", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });

          const data = await response.json();

          if(!response.ok) {
            throw new Error(data as string);
          }
          else if(response.ok) {
            Router.replace('/');
          }

    } catch (error) {
        console.log(error);
    }
}

