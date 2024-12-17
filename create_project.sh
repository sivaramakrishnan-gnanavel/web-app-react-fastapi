echo "Installting the typescript project"
npx create-react-app frontend --template typescript

cd frontend

echo "Running npm installations"
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid react-router-dom axios react-redux redux @reduxjs/toolkit