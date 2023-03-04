import 'dotenv/config';
import app from './app';
import connectToDatabase from './models/Connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Connection with database generated an error:\r\n');
    console.log(err);
    console.log('\r\nServer initialization aborted.');
    process.exit(0);
  });
