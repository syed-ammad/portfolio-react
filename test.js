const dependencies =  {
    "@material-ui/core": "^4.12.4",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "aos": "^2.3.4",
    "bootstrap": "^5.1.3",
    "node-sass": "^6.0.0",
    "pkg-dir": "^6.0.1",
    "react": "^17.0.2",
    "react-animated-cursor": "^2.2.0",
    "react-dom": "^17.0.2",
    "react-hook-form": "^7.6.3",
    "react-modal": "^3.13.1",
    "react-pwa-install": "^1.0.12",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-slick": "^0.28.1",
    "react-tabs": "^3.2.2",
    "react-transition-group": "^4.4.2",
    "slick-carousel": "^1.8.1",
    "svgo": "^2.8.0",
    "web-vitals": "^1.0.1"
  }

Object.keys(dependencies).map(el => console.log('npm install --force ' + el))