# VueJS-Axios-Element-UI
Developed a Web Application using VueJS and utilized Axios to make REST API calls to fetch and post data - Implemented CRUD functionality.

# Getting Started
## Installation through npm
Install Axios --> npm install axios<br/>
Install Element-UI --> npm install element-ui -S

## Usage Element-UI - inside main.js
import axios from 'axios'<br/>
import VueAxios from 'vue-axios'<br/>
Vue.use(VueAxios, axios)

## Usage Element-UI - inside main.js
import Element from 'element-ui'<br/>
Vue.use(Element)

## Instructions - Running Web App
Naviagte to file via Terminal/CMD and run the following command --> npm run serve

## For full functionality - CRUD
Run a JsonServer by Naviagting to file/src/assests and run the following coomand --> json-server --watch typiecode.json<br/>
uncomment http://localhost:3000/users/ from file /src/components/users.vue
