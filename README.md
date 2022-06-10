# BackendInternWork

- Fork the repository.

- Clone the repo
   ```sh
   git clone https://github.com/<YOUR_USERNAME>/BackendInternWork.git
   ```

- Open your terminal/cmd in the `BackendInternWork` folder

- Install dependencies
   ```sh
   npm install
   ```

- Run `npm start` to start the development server.


For Testing purpose I have provided JSON data,

- Download and Install postman in PC,
- Open Postman
- Type,
```sh
   localhost:3000/create
```
to create an item data, in body enter data provided in jsondata/Create.json(Select POST)

- Then to get data of specific id(Select GET)
- Type, 
```sh
   localhost:3000/reports?reportID=62a0fd011896c54345a8742a
```

- To update, 
- Type, 
```sh
   localhost:3000/reports
```
to update an item data, in body enter data provided in jsondata/Update.json(Select POST)
