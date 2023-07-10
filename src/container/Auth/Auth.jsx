import axios from "axios";


// Function to check if the user is authenticated
export function isAuthenticated() {
  const token = window.localStorage.getItem("accessToken");
  return !!token;
}

// Function to get the user type
export function getUserType() {
  return window.localStorage.getItem("userType");
}

// Function to set the user type
export function setUserType(userType) {
  window.localStorage.setItem("userType", userType);
}

// Function to handle the login action
export function handleLogin(email, password) {
  // Perform any client-side validation or other actions here
  alert("Login successful");
  window.localStorage.setItem("loggedIn", true);

  // Replace 'API_URL' with the actual URL of your authentication endpoint


  const API_URL = "https://example.com/api/login";

  // Make the API call
  axios
    .post(API_URL, { email, password })
    .then((response) => {
      const apiResponse = response.data; // Assuming the API response contains the user type

      // Extract the JWT token from the API response
      const token = apiResponse.token;

      // Save the token in local storage or cookies
      // Replace 'accessToken' with the appropriate key for storing the token
      window.localStorage.setItem("accessToken", token);

      setUserType(apiResponse.userType);

      // Redirect to the appropriate page based on the user type
      if (apiResponse.userType === "teacher") {
        window.location.href = "/teacherDetails";
      } else if (apiResponse.userType === "student") {
        window.location.href = "/studentDetails";
      } else {
        // Handle other user types or display an error message
      }
    })
    .catch((error) => {
      // Handle any errors from the API call
      console.error("Login failed:", error);
    });
}

// Function to make authenticated API requests
export function makeAuthenticatedRequest(url, method, data) {
  const token = window.localStorage.getItem("accessToken");

  const config = {
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(config);
}
