# 🌆 React Props Project

Welcome to the React Props Project, a small React-based application showcasing the beautiful city of Islamabad, the capital of Pakistan. This project utilizes React Router for page navigation and React Props for passing dynamic data into components.

## 🚀 Features
- 🏙️ **Card Component**: Displays information about Islamabad, including its population, old name, and capital status.
- 🖼️ **Image Gallery**: View stunning images of Islamabad with a smooth hover effect and full-screen image preview.
- 🔄 **Dynamic Routing**: Navigate between pages such as Home, Information, and Image Gallery.
- 🎨 **Beautiful UI**: Built with Tailwind CSS for a modern, responsive, and aesthetically pleasing design.
- ✨ **Interactive Elements**: Hover effects, image transitions, and modal views for enhanced user experience.

## 🎯 Project Structure

📦 react-props-project
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Card.jsx         # Displays city details as props
 ┃ ┃ ┣ 📜 Information.jsx  # Page displaying Islamabad's background info
 ┃ ┃ ┗ 📜 Images.jsx       # Image gallery with full-screen modal view
 ┃ ┣ 📜 App.js             # Main app component with routing
 ┃ ┗ 📜 index.js           # React DOM rendering
 ┣ 📜 package.json         # Project dependencies and scripts
 ┣ 📜 README.md            # Project overview and documentation
 ┗ 📜 tailwind.config.js   # Tailwind CSS configuration

# React Props Project

## 🛠️ Tech Stack
- **React**: A popular JavaScript library for building user interfaces.
- **React Router**: For routing and navigation between pages.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Freepik Images**: Images sourced from Freepik to showcase the beauty of Islamabad.

## ⚙️ How to Run the Project
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-props-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-props-project
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the app.

## 📚 Detailed Components Overview

### 1. Card Component
This component displays information about the city of Islamabad by passing the following props:
- `name`: Name of the city.
- `capital`: Description of the city's capital status.
- `oldName`: The previous name of the city.
- `population`: The current population of Islamabad.
- `infoButton`: Text for the button linking to more information.
- `images`: Text for the button linking to the image gallery.

### 2. Images Component
An image gallery that displays a list of stunning images with hover effects and modal view. Features include:
- **Hover Effects**: Images scale up when hovered over.
- **Modal Preview**: Click an image to view it in full-screen mode with a close button.

### 3. Information Component
Displays detailed information about Islamabad, including:
- **Population**: 1.2 million
- **Landmarks**: Faisal Mosque, Daman-e-Koh, Pakistan Monument, and more.
- **Climate**: Humid subtropical climate.


## 👨‍💻 Author
**Muhammad Shakeel:**
Feel free to connect with me on GitHub for any questions or contributions!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

