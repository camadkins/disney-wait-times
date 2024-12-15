# Backend Endpoints Documentation

This document provides an overview of the backend API endpoints, their purposes, and usage details.

---

## **Endpoints**

### **1. `/parks`**

- **Method**: `GET`
- **Description**: Retrieves a list of all parks.
- **Request Parameters**: None
- **Response**:

  ```json
  [
    { "id": 1, "name": "Magic Kingdom" },
    { "id": 2, "name": "Epcot" },
    { "id": 3, "name": "Hollywood Studios" },
    { "id": 4, "name": "Animal Kingdom" }
  ]
  ```

### **2. `/rides/<int:park_id>`**

- **Method**: `GET`
- **Description**: Retrieves a list of rides for a specific park.
- **Request Parameters**:
  - `park_id` (integer): The ID of the park.
- **Response**:

  ```json
  [
    {
      "id": 1,
      "name": "Space Mountain",
      "wait_time": 30,
      "is_open": true
    },
    {
      "id": 2,
      "name": "Splash Mountain",
      "wait_time": 45,
      "is_open": true
    }
  ]
  ```

- **Error Handling**:
  - Returns `404` if the `park_id` does not exist.

### **3. `/fetch-selections`**

- **Method**: `GET`
- **Description**: Retrieves the current selections for parks and rides.
- **Request Parameters**: None
- **Response**:

  ```json
  {
    "parks": [1, 2],
    "rides": [1, 3]
  }
  ```

### **4. `/update-selections`**

- **Method**: `POST`
- **Description**: Updates the selected parks and rides.
- **Request Body**:

  ```json
  {
    "parks": [1, 3],
    "rides": [1, 5]
  }
  ```

- **Response**:
  - `200 OK` on success.
  - Error messages for invalid input.

---

## **Notes**

- Endpoints are designed to support real-time synchronization between the Dashboard and Display.
- Error handling has been implemented to provide meaningful feedback for failed requests.
- All endpoints are CORS-enabled to allow requests from the frontend hosted on a different domain.
