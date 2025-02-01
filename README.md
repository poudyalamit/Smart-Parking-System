# Smart Parking System

## Overview

The **Smart Parking System** provides real-time spot availability for parking lots. The system uses data collected from AWS (Amazon Web Services) DynamoDB for storing and retrieving parking spot information, and integrates with hardware to send live data updates. It offers users a way to check available parking spots, view their current location on a map, and get directions to nearby spots.

This project is built using React for the frontend, AWS DynamoDB for backend data storage, and incorporates hardware for real-time data transmission.

## Features

- **Real-time Parking Spot Availability**: Fetch parking spot availability from AWS DynamoDB.
- **Interactive Map**: Display parking spots on a map using OpenStreetMap (OSM) and Leaflet.
- **User Location Tracking**: Track and display the user's current location on the map.
- **Directions**: Provide navigation to available parking spots from the user's current location.
- **Hardware Integration**: Send data from sensors to update parking spot status in real-time.

## Technologies Used

- **Frontend**: 
  - React.js
  - React-Leaflet (for displaying the map)
  - Leaflet (map library)
  - AWS SDK (for interacting with DynamoDB)
  - CSS/Styled Components for UI
- **Backend**: 
  - AWS DynamoDB (for storing parking spot data)
  - AWS SDK for JavaScript (for querying DynamoDB)

## Setup & Installation

### Prerequisites

- Node.js installed (version 14 or above)
- AWS Account with DynamoDB set up
- API access keys (Access Key ID and Secret Access Key for AWS)
- React development environment (Create React App)

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/poudyalamit/smart-parking.git
   cd smart-parking

2. **Install dependencies**:
    Run the following command to install the necessary packages:
    ```bash
    npm install
    ```
    This will install all the required dependencies including React, Leaflet, AWS SDK, and other libraries.

3. **Set up AWS Credentials**:
    Ensure you have AWS CLI installed and configured with your AWS access credentials:

    Install AWS CLI
    Run the command aws configure to input your Access Key ID and Secret Access Key.
    Alternatively, you can manually configure your credentials in a ~/.aws/credentials file:

    ```ini
    aws_access_key_id=YOUR_ACCESS_KEY_ID
    aws_secret_access_key=YOUR_SECRET_ACCESS_KEY
    region=us-east-1

4. **Set up DynamoDB Table**:
    Ensure that you have a table named ParkingSpots in AWS DynamoDB with the following schema:

    ***Partition Key***: spotId (String)

5. **Start the Development Server**:
    Once everything is set up, run the following command to start the React development server:
    ```bash
    npm run dev

## Contributing
Contributions are welcome! If you'd like to contribute to this project:

    * Fork the repository.
    * Create a new branch (git checkout -b feature-branch).
    * Make your changes and commit them.
    * Push to the branch (git push origin feature-branch).
    * Open a pull request with a description of your changes.

## Liscense
    This project is licensed under the MIT License.