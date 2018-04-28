if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:
        'mongodb://aj:009985@ds161459.mlab.com:61459/aztuks'}
} else {
   module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}