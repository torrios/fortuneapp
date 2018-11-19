import fortunes from './routes/read-fortunes';

(async () => {
    console.log(await fortunes());
})()
.catch(err => console.error(err));