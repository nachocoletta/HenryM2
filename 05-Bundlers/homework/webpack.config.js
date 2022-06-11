module.exports = {
    entry: './browser/app.js', // el punto de arranque de nuestro programa
    output: {
      path: __dirname + '/browser', // el path absoluto para el directorio donde queremos que el output sea colocado
      filename: 'bundle.js' // el nombre del archivo que va a contener nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
    },
    mode: "development"

  }