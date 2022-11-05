
# WEBPACK

## Inicializar proyecto
mkdir a27l-webpack-teamplate  
cd a27l-webpack-teamplate  
git init  
npm init -y  
mkdir src  
touch src/index.js  

## Instalar webpack como dependencia de desarrollo
npm install webpack webpack-cli -D  

## Desde línea de comando podemos utilizar npx al no tener webpack instalado globalmente
npx webpack  

## Generar desarrollo
npx webpack --mode development  

## Generar producción
npx webpack --mode production  

## Fichero configuración webpack
touch  webpack.config.js  
touch  webpack.config.dev.js  

npx webpack --mode development --config webpack.config.js  
npx webpack --mode production --config webpack.config.js  

## Utilizar NPM, fichero package.json, scripts
npm run build  

## Babel loader (que el JS sea compatible con todos los navegadores)
npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime  

## Crear fichero de configuracion de Babel
touch .babelrc  

## Instalamos el plugin para procesar HTML con webpack
npm install -D html-webpack-plugin  

## Instalamos el loader y el plugin para css
npm install -D mini-css-extract-plugin css-loader  

## Instalar preproceador de CSS ejemplo: sass
npm install -D sass sass-loader style-loader  

## Imágenes, ficheros varios
npm install -D copy-webpack-plugin  
npm install -D url-loader file-loader  

## Minimización y optimización
npm install -D css-minimizer-webpack-plugin terser-webpack-plugin  

## Variables de entorno, fichero .env
npm install -D dotenv-webpack  

## Limpieza dist
npm -D install clean-webpack-plugin  

## Server desarrollo
npm install -D webpack-dev-server  

## Analizar código
npm install -D webpack-bundle-analyzer  

## RUN Desarrollo
npm run start  

## RUN producción
npm run build  
