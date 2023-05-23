import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
let handleLoginFetch = (username, password) => {
    return axios.post('/login', {
        username: username,
        password: password
    })
}

module.exports = handleLoginFetch;