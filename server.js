import chalk from 'chalk';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(require('compression')());
app.use(express.static('storybook-static'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, err => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log(chalk.yellow(`NODE_ENV: ${process.env.NODE_ENV}`));
    console.log(
      chalk.green(
        `===> saronia-ui <=== | Listening on http://localhost:${PORT}.`,
      ),
    );
  }
});
